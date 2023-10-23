import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";
// import { updateWebSocketReadyState } from "../api/apiSlice";
import { socket } from "../../sockets/socketIo";
const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

const initialState = {
  webSocketReadyState: undefined,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(updateWebSocketReadyState, (state, action) => {
    //   state.webSocketReadyState = action.payload;
    // });
  },
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: (userId) => ({
        url: `/chats/get-chats?userId=${userId}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...Object.values(result).map(({ _id }) => ({ type: "Chat", _id }))]
          : ["Chat"],
      //getChats query triggered on dashboard chat page, web socket listening for message from server
      async onCacheEntryAdded(
        userId,
        { dispatch, updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        socket.on("message", (data) => {
          switch (data.type) {
            case "chat":
              {
                console.log("got the chat from server");
                const sender = data.content.message.sender;
                const recipient = data.content.message.recipient;
                // const existingChatId = data.content.chatId;
                updateCachedData((draft) => {
                  //check for existing chat contigient on both senderId and recipientId existing in chatParticipants
                  let chatIndex;
                  const existingChatId = Object.values(draft).map(
                    (chat, index) => {
                      const draftParicipantIds = [];
                      draftParicipantIds.push(
                        chat.participants.user.participantId
                      );
                      draftParicipantIds.push(
                        chat.participants.friend.participantId
                      );
                      console.log(draftParicipantIds);
                      if (
                        draftParicipantIds.includes(sender) &&
                        draftParicipantIds.includes(recipient)
                      ) {
                        console.log("exitsts");
                        console.log(chat._id);
                        chatIndex = index;
                        return chat._id;
                      }
                    }
                  )[chatIndex];
                  console.log("existing id", existingChatId);

                  if (existingChatId) {
                    //target existing chat and update data
                    console.log("chat exists");
                    const chatIds = Object.values(draft).map(
                      (chat) => chat._id
                    );
                    const chatIndex = chatIds.indexOf(existingChatId);
                    Object.values(draft)[chatIndex].messages.push(
                      data.content.message
                    );
                  } else {
                    console.log("new chat");
                    let newMessages = [];
                    let newContent = { ...data.content };
                    let newParticipants = {};
                    newContent.participants.map((p) => {
                      if (p.participantId === userId) {
                        newParticipants.user = { ...p };
                      } else {
                        newParticipants.friend = { ...p };
                      }
                    });
                    newMessages.push(data.content.message);
                    newContent.participants = newParticipants;
                    newContent.messages = newMessages;
                    draft["temp id"] = newContent;
                  }
                });
              }
              break;
            default:
              break;
          }
        });

        try {
          await cacheDataLoaded;
        } catch (error) {}
        await cacheEntryRemoved;
      },
      transformResponse: (responseData) => {
        let normParticipants = {};
        let newResponseData = {};
        console.log("userid", userId);

        responseData.chats.map((chat) => {
          let chatCopy = { ...chat };
          chat.participants.map((p) => {
            if (p.participantId == userId) {
              normParticipants.user = { ...p };
            } else {
              normParticipants.friend = { ...p };
            }
          });
          // chat.participants = normParticipants;
          chatCopy.participants = normParticipants;
          normParticipants = {};
          newResponseData[chat._id] = chatCopy;
        });
        // console.log("newResponse is ", newResponseData);

        // newResponseData.participants = normParticipants;
        return newResponseData;
      },
    }),

    createChat: builder.mutation({
      query: (newChat) => ({
        url: "/chats/create-chat",
        method: "POST",
        body: newChat,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Chat", _id: arg._id }],
      async onQueryStarted(newChat, { dispatch, queryFulfilled }) {
        socket.emit("message", { type: "chat", content: newChat });

        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
        }
      },
    }),
  }),
});

export const selectWebSocketReadyState = (state) =>
  state.chats.webSocketReadyState;

export const { useGetChatsQuery, useCreateChatMutation } = extendedApiSlice;
export default chatsSlice.reducer;

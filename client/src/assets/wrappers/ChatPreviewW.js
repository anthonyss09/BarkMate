import styled from "styled-components";

const Wrapper = styled.aside`
  .icon-arrow {
    color: var(--med-bright-blue);
  }
  .chat-excerpt {
    color: rgb(140, 140, 140);
    color: rgb(100, 100, 100);
    font-size: 0.9rem;
    margin-left: 0.1rem;
  }
  .chat-name {
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
  .chat-preview-image {
    width: 80px;
    height: 80px;
    width: 60px;
    height: 60px;
    border-radius: 5rem;
  }
  .chat-preview-main {
    border-bottom: 2px solid rgb(248, 248, 248);
    padding: 1rem 1.6rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
  }
`;

export default Wrapper;

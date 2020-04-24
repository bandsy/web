import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

interface props {
  image: string;
  name: string;
  message: string;
  date: string;
  unread?: boolean;
  you?: boolean;
}

const UserImage = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 5px;
  object-fit: cover;
`;

const MessageContents = styled.div`
  padding-left: 15px;
  width: calc(100% - 53px);
`;

const MessageTextContents = styled.div`
  display: flex;
`;

const MessageText = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 15px;
  font-size: 14px;
  margin-bottom: 0;
`;

const MessageDate = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  margin-left: auto;
`;

const MessageContainer = styled.div<{ unread: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 150ms ease;
  color: ${(x: any) => (x.active ? x.theme.darkpink : x.theme.ultramarine)};
  background: ${(x: any) => (x.active ? x.theme.lightpink : "transparent")};
  cursor: pointer;
  margin-left: -15px;
  margin-right: -15px;
  width: calc(100% + 30px);
  height: 100%;

  &:hover {
    background-color: ${(x): any => x.theme.dirtywhite};
  }

  ${x =>
    x.unread &&
    `
    background-color: ${x.theme.lightpink};
    ${MessageTextContents} {
      font-weight: 700;
    }
  `}
`;

const MessageListItem = ({
  unread,
  image,
  name,
  message,
  date,
  you,
}: props) => {
  const intl = useIntl();
  return (
    <MessageContainer unread={unread}>
      <div>
        <UserImage src={image} alt={name} />
      </div>
      <MessageContents>
        <h6 className="marine">{name}</h6>
        <MessageTextContents>
          <MessageText>
            {you
              ? intl.formatMessage(
                  { id: "messagingModal.messageFromYou" },
                  { messageContents: message }
                )
              : message}
          </MessageText>
          <MessageDate>{date}</MessageDate>
        </MessageTextContents>
      </MessageContents>
    </MessageContainer>
  );
};

export default MessageListItem;

import React, { useRef } from "react";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { Row, Col, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import ListItem from "../shared/ListItem";
import MessageListItem from "../messaging/MessageListItem";

const MessagingModal = () => {
  const intl = useIntl();
  return (
    <>
      <h3 className="line">
        {intl.formatMessage({ id: "messagingModal.messages" })}
      </h3>
      <Row>
        <Col col={12}>
          <MessageListItem
            name="Matt"
            image="https://cdn.discordapp.com/attachments/678593423015673928/696335670611935392/20200405_132906.jpg"
            message="awjhdahwdh awhdahdkjhawhj awhj kwadh awdhjkawdhj wdahj awd jkhdwahj k"
            date={intl.formatDate(Date.now(), { weekday: "short" })}
            unread
          />
        </Col>
      </Row>
    </>
  );
};

export default MessagingModal;

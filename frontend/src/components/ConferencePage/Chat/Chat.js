import React, {Component} from "react";
import Message from "./Message/Message";
import "./Chat.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import MessageSender from "./MessageSender/MessageSender";

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reply: null
        };
    }

    render() {
        return (
            <div className={"chat"}>
                <p className={"bold font_size_big text_center"}>Чат</p>
                <MessageSender reply={this.state.reply} chatId={this.props.chat.id}/>
                <div className={"messages"}>
                    {this.props.chat.messages.map((message) =>
                        <Message
                            onReply = {(reply)=>{
                                this.setState({reply: reply});
                            }}
                            user={this.props.user}
                            key={message.id}
                            message={message}/>
                    )}
                </div>
            </div>
        );
    }
}

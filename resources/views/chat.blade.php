@extends('layouts.app')
@section('content')
<div class="row chat-window" id="chat_window_1" style="margin-left:10px;">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-primary">
                    <div class="panel-heading top-bar">
                        <div class="col-md-8">
                            <h3 class="panel-title">
                                <span class="glyphicon glyphicon-comment"></span> Laravel Chat App</h3>
                        </div>
                    </div>
                    <div id="chat-window" class="panel-body msg_container_base">

                    </div>

                    <div class="panel-footer">
                        <p id="feedback" class="small"></p>
                        <div class="input-group">
                            <input id="txt-name" type="text" class="form-control input-sm chat_input" placeholder="Write your Name here..." />
                            <input id="txt-message" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
                            <span class="input-group-btn">
                                <button class="btn btn-primary btn-sm" id="btn-chat">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection
declare module 'qwebchannel' {

  export const enum QWebChannelMessageTypes {
    signal = 1,
    propertyUpdate = 2,
    init = 3,
    idle = 4,
    debug = 5,
    invokeMethod = 6,
    connectToSignal = 7,
    disconnectFromSignal = 8,
    setProperty = 9,
    response = 10,
  }

  export interface QWebChannel {
    new (transport: WebSocket, initCallback: (channel: QWebChannel) => void): QWebChannel;

    send(data: any): void;
    exec(data: any, callback: (data: any) => void): void;
    handleSignal(message: MessageEvent): void;
    handleResponse(message: MessageEvent): void;
    handlePropertyUpdate(message: MessageEvent): void;
  }

}
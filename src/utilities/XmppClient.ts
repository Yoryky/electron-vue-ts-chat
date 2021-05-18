import * as XMPP from "stanza";
import MessagePlugin  from './MessagePlugin'
export default class XmppClient {
  private static xmppClient: XmppClient;
  private listenCallback: any;
  private client: any;
  private constructor() {
    console.log("xmppClient construct");
    this.client = XMPP.createClient({
      jid: "test1@test.yjing.com",
      password: "",
      resource: "test",
      // If you have a .well-known/host-meta.json file for your
      // domain, the connection transport config can be skipped.
      transports: {
        //websocket: "ws://10.13.6.55:5290",
        websocket:'ws://192.168.0.105:5290'
      },
    });

    this.client.use(MessagePlugin)

    this.client.on("session:started", () => {
      this.client.getRoster().then((result:any) => {
        console.log("roster result = " + result);
      });
      this.client.sendPresence();
    });

    this.client.on("connected", () => {
      console.log("connected");
    });

    this.client.on("disconnected", () => {
      console.log("disconnected");
    });

    this.client.on("chat", (msg:any) => {
      console.log("chat msg = " + msg);
      if (this.listenCallback) {
        this.listenCallback(msg);
      }
    });

    this.client.on("message:error", (msg:any) => {
      console.log("message error msg = " + msg);
    });

    this.client.on("message:failed", (msg:any) => {
      console.log("message failed msg = " + msg);
    })

    this.client.connect();
  }

  public startListenMessage(callback: any) {
    this.listenCallback = callback;
  };

  public sendMessage = (toUser: any, msgbody: any, type: any) => {
    // this.client.sendMessage({
    //   to: toUser,
    //   body: msgbody,
    //   type: "chat",
    // });
    this.client.sendMyStanza(toUser,msgbody)
  };

  public static getInstance(): XmppClient {
    if (this.xmppClient == null) {
      this.xmppClient = new XmppClient();
    }
    return this.xmppClient;
  }


  public test() {
    return "The name is xmppClient";
  }


}

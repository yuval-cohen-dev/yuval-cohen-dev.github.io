"use client";
// @ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";

export default function Messenger() {
  const tawkMessengerRef = useRef<any>(null);
  const props = {
    onLoad: () => {},
    onStatusChange: () => {},
    onBeforeLoad: () => {},
    onChatMaximized: () => {},
    onChatMinimized: () => {},
    onChatHidden: () => {},
    onChatStarted: () => {},
    onChatEnded: () => {},
    onPrechatSubmit: () => {},
    onOfflineSubmit: () => {},
    onChatMessageVisitor: () => {},
    onChatMessageAgent: () => {},
    onChatMessageSystem: () => {},
    onAgentJoinChat: () => {},
    onAgentLeaveChat: () => {},
    onChatSatisfaction: () => {},
    onVisitorNameChanged: () => {},
    onFileUpload: () => {},
    onTagsUpdated: () => {},
    onUnreadCountChanged: null,
    visitor: null,
    maximize: null,
    minimize: true,
    toggle: null,
    popup: null,
    getWindowType: null,
    showWidget: null,
    hideWidget: null,
    toggleVisibility: null,
    getStatus: null,
    isChatMaximized: null,
    isChatMinimized: null,
    isChatHidden: null,
    isChatOngoing: null,
    isVisitorEngaged: null,
    onLoaded: null,
    onBeforeLoaded: null,
    widgetPosition: null,
    endChat: null,
    setAttributes: null,
    addEvent: null,
    addTags: null,
    removeTags: null,
    secureMode: null,
    customStyle: null,
  };
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/679824ef825083258e0bcf55/1iil50i8a';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                    })();
                `,
        }}
      />
      <TawkMessengerReact
        propertyId="property_id"
        widgetId="default"
        {...props}
        ref={tawkMessengerRef}
      />
    </>
  );
}

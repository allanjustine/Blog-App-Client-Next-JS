import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

export default function Emoji({
  children,
  onEmojiSelect,
  isEmojiPickerOpen,
  emojiPickerRef,
}: any) {
  const handleEmojiClick = (emojiData: EmojiClickData, event: any) => {
    const emoji = emojiData.emoji;
    onEmojiSelect(emoji);
  };

  return (
    <div ref={emojiPickerRef} className="relative">
      {isEmojiPickerOpen && (
        <div className="absolute bottom-full mb-2 right-0">
          <EmojiPicker
            autoFocusSearch={false}
            onEmojiClick={handleEmojiClick}
          />
        </div>
      )}
      {children}
    </div>
  );
}

import "./styles.scss";

import { Underline as UnderlineTiptap } from "@tiptap/extension-underline";
import { Image as ImageTiptap } from "@tiptap/extension-image";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  ChevronDown,
  Image,
  Italic,
  Link,
  Table,
  Underline,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ElementTagText } from "@/lib/utils";

export default function Tiptap({ content }: { content: string }) {
  const [position, setPosition] = useState("bottom");
  const MenuBar = () => {
    const { editor } = useCurrentEditor();
    if (!editor) {
      return null;
    }

    return (
      <div className="flex items-center py-3 border-t border-b gap-7 border-white/10">
        <div className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="justify-between font-normal border hover:text-white hover:bg-transparen w-36 border-white/10"
              >
                {ElementTagText()} <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
              <DropdownMenuLabel>Element Tag</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem
                  value="Heading 1"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  Heading 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Heading 2"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  Heading 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Heading 3"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  Heading 3
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Paragraph"
                  onClick={() => editor.chain().focus().setParagraph().run()}
                >
                  Paragraph
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active text-black" : ""}
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active text-black" : ""}
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={
              editor.isActive("underline") ? "is-active text-black" : ""
            }
          >
            <Underline className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-1">
          <Button
            variant={"ghost"}
            size={"icon"}
            disabled={!editor.can().chain().focus().toggleBold().run()}
          >
            {
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image className="w-4 h-4" />
            }
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
          >
            <Link className="w-4 h-4" />
          </Button>
        </div>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <Table className="w-4 h-4" />
        </Button>
      </div>
    );
  };

  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    UnderlineTiptap,
    ImageTiptap,
  ];

  const customEditorProps = {
    attributes: {
      class:
        "focus:outline outline-offset-12 outline-1 outline-indigo-600 mt-2",
    },
  };
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
      editorProps={customEditorProps}
    />
  );
}

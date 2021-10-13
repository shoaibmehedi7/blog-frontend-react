


import { ToolbarAlign, } from '@udecode/plate-alignment-ui';
import { createAlignPlugin, ELEMENT_ALIGN_CENTER, ELEMENT_ALIGN_JUSTIFY, ELEMENT_ALIGN_RIGHT, } from '@udecode/plate-alignment';
import React from 'react'
import { Plate ,useStoreEditorRef,} from '@udecode/plate'
import { getPlatePluginType, useEventEditorId,} from '@udecode/plate-core'

  const plugins = [
    // ...pluginsBasic,
    createAlignPlugin()
  ];

const ToolbarButtonsAlign = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

  return (
    <>
      <ToolbarAlign text = "edit" />
      <ToolbarAlign
        type={getPlatePluginType(editor, ELEMENT_ALIGN_CENTER)}
        // icon={<FormatAlignCenter />}
        text = 'edit'
      />
      <ToolbarAlign
        type={getPlatePluginType(editor, ELEMENT_ALIGN_RIGHT)}
        // icon={<FormatAlignRight />}
        text = 'edit'

      />
      <ToolbarAlign
        type={getPlatePluginType(editor, ELEMENT_ALIGN_JUSTIFY)}
        // icon={<FormatAlignJustify />}
        text = 'edit'

      />
    </>
  );
};

function BlogEditor(props) {
    return (
      <>
      {/* <HeadingToolbar> */}
        <ToolbarButtonsAlign />
      {/* </HeadingToolbar> */}
      <Plate
        id="alignment"
        plugins={plugins}
        // components={components}
        // options={options}
        // editableProps={editableProps}
        // initialValue={initialValueBasicElements}
      />
    </>
    )
}

export default BlogEditor
    
import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import Table from '../src/table'
import ColorPicker from '../src/color-picker'
import Markdown from '../src/markdown'
import { Form, Input, Button } from 'antd'

BraftEditor.use(Table({
  defaultColumns: 4,
  defaultRows: 5,
  withDropdown: true,
  exportAttrString: 'border="1" style="border-collapse: collapse"'
}))

BraftEditor.use(Markdown())

BraftEditor.use(ColorPicker())

const tableStr = '<p></p><table border="1" style="border-collapse: collapse"><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table><p></p>';
const tableStr2 = '<table border="1" style="border-collapse: collapse"><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table>';

class Demo extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null)
 }
  componentDidMount () {
    const htmlContent = 'Hello World!'
    this.setState({
        editorState: BraftEditor.createEditorState(htmlContent).toHTML()
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          title: values.title,
          content: values.content.toHTML() // or values.content.toHTML()
        }
        this.setState({
          editorState: submitData.content
      })
      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color']
    return (
      <div className="demo-container">
        <Form style={{width:'900px'}} onSubmit={this.handleSubmit}>
          <Form.Item {...Form.ItemLayout} label="文章标题">
            {getFieldDecorator('title', {
              rules: [{
                required: true,
                message: '请输入标题',
              }],
            })(
              <Input size="large" placeholder="请输入标题"/>
            )}
          </Form.Item>
          <Form.Item {...Form.ItemLayout} label="文章正文">
            {getFieldDecorator('content', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
                    callback('请输入正文内容')
                  } else {
                    callback()
                  }
                }
              }],
            })(
              <BraftEditor
                className="my-editor"
                controls={controls}
                placeholder="请输入正文内容"
              />
            )}
          </Form.Item>
          <Form.Item {...Form.ItemLayout}>
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
        <div dangerouslySetInnerHTML={{__html: this.state.editorState}}></div>
      </div>
    )
  }
}


const FormDemo = Form.create()(Demo);
ReactDOM.render(<FormDemo />, document.querySelector('#root'))
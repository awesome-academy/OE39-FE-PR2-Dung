import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

function CommentInput({ onChange, onSubmit, submitting, value }) {
  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
}

export default CommentInput;

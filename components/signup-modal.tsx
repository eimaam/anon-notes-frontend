import { Button, Form, Input, Modal } from "antd";
import { FC, useState } from "react";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Title from "antd/es/typography/Title";
import ModalWrapper from "./ui/modal-wrapper";

interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const { Item } = Form;

export const SignUpModal: FC<IModal> = ({ open, setOpen }) => {
  const handleOk = (values: any) => {
    console.log({ values });
  };

  return (
    <ModalWrapper
      closable={true}
      isOpen={open}
      onClose={() => setOpen(false)}
      footer={null}
    >
      <Flex direction="column" justify="center" align="center" className="my-4">
        <Title level={3}>Sign Up</Title>
        <Text>Create an account by filling the below form</Text>
      </Flex>

      <Form
        name="sign_up"
        initialValues={{ remember: true }}
        onFinish={handleOk}
      >
        <Item
          name="username"
          rules={[{ required: true, message: "Please enter your Username!" }]}
        >
          <Input placeholder="Username" />
        </Item>
        <Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Item>
        <Item
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your Password!" }]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Item>
        <Item>
          <Grid>
            <Button size="large" htmlType="submit" type="primary">
              Sign Up
            </Button>
          </Grid>
        </Item>
      </Form>
      <p className="text-center mx-auto">
        Already have an account?
        <Button
          type="link"
          className="underline"
          onClick={() => setOpen(false)}
        >
          Login
        </Button>
      </p>
    </ModalWrapper>
  );
};

export default SignUpModal;

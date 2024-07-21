import { Button, Form, Input } from "antd";
import { FC } from "react";
import { Flex, Grid, Text } from "@radix-ui/themes";
import Title from "antd/es/typography/Title";
import ModalWrapper from "./ui/modal-wrapper";

interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const { Item } = Form;

export const LoginModal: FC<IModal> = ({ open, setOpen }) => {
  const handleOk = (values: any) => {
    console.log({ values });
  };

  return (
    <ModalWrapper isOpen={open} onClose={() => setOpen(false)}>
      <Flex direction="column" justify="center" align="center" className="my-4">
        <Title level={3}>Login</Title>
        <Text>Log in to your account</Text>
      </Flex>

      <Form name="login" initialValues={{ remember: true }} onFinish={handleOk}>
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
        <Item>
          <Grid>
            <Button size="large" htmlType="submit" type="primary">
              Login
            </Button>
          </Grid>
        </Item>
      </Form>
      <p className="text-center mx-auto">
        Don&apos;t have an account?
        <Button
          type="link"
          className="underline"
          onClick={() => setOpen(false)} // Adjust this to trigger the sign-up modal or action
        >
          Sign Up
        </Button>
      </p>
    </ModalWrapper>
  );
};

export default LoginModal;

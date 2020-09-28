import React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { Props } from "./Button"

export default {
  title: "button",
  component: Button,
} as Meta

const Template: Story<Props> = (args) => {
  <Button {...args}>蒼あおい</Button>
}

export const Red = Template.bind({})
Red.args = {
  color: "red"
}
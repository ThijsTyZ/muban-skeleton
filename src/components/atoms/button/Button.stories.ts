import type { Story } from '@muban/storybook/dist/client/preview/types-6-0';
import { meta, ButtonTemplateProps } from './Button.template';

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default: Story<ButtonTemplateProps> = () => meta;
Default.args = {
  label: 'Click me',
};

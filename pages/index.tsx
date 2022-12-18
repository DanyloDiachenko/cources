import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">Click me</Button>
      <Button appearance="ghost" arrow="down">Click me</Button>
      <P size="s">abc</P>
      <P size="m">abc</P>
      <P size="l">abc</P>
      <Tag size="s">hello</Tag>
      <Tag size="m">hello</Tag>
      <Tag color="primary">hello</Tag>
      <Tag color="red">hello</Tag>
      <Tag color="green">hello</Tag>
    </>
  );
}
import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">Click me</Button>
      <Button appearance="ghost" arrow="down">Click me</Button>
      <P size="s">abc</P>
      <P size="m">abc</P>
      <P size="l">abc</P>
    </>
  );
}
import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">Click me</Button>
      <Button appearance="ghost" arrow="right">Click me</Button>
    </>
  );
}
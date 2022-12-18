import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary">Click me</Button>
      <Button appearance="ghost">Click me</Button>
    </>
  );
}
/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {

  }
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

//* Приклад використання:
const pageProps: Props = { title: 'test, work' };
const myPage = new Page(pageProps);
myPage.pageInfo();

export { };
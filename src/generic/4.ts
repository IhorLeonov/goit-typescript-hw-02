/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Smth {
  title: string;
}

class Component<T> {
  constructor(public props: Smth) {}
}

class Page<T> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

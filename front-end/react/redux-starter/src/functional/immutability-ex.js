import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

function publish(book) {
  book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS());

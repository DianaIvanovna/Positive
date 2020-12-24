import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  activeButtonLeft = false;
  activeButtonRight = true;
  activeReview = 0;
  reviews = [
    {
      name: 'Hamdan Ahmed-Baig',
      text: `You guys made me feel like it's a home and i am surrounded by big family of loving and caring people, all of you guys, you have literally made the best moment in my life forever. I would like to say special thanks to the organizer of the trip Erken who called me "мой друг" at first sight, I have been to many trips but never seen such a great caring person, a great organizer and a responsible man.
      (Вы, ребята, заставили меня почувствовать себя как дома, будто я окружен большой семьей любящих и заботливых людей, все вы, ребята, буквально сделали лучший момент в моей жизни. Я хотел бы сказать особую благодарность организатору поездки Еркену, который назвал меня "мой друг" с первого взгляда. Я был во многих поездках, но никогда не видел такого неравнодушного человека, великолепного Организатора с большой буквы).`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/yr-N8SZGjko.jpg',
    },
    {
      name: 'Олег Ефимов',
      text: `Ребята большие молодцы. Дали крутую организацию, вкусную еду, адекватность во взаимодействиях и всепроницающую легкость.
      Это большая трудность - организовать времяпровождение людей так, чтобы позволить им кайфануть всем вместе. Люди разные, вайб у всех разный и нужно это услышать. "Позитив" умеет слышать. И поэтому вряд ли кто-то мог сделать этот сплав лучше, чем эти ребята!`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/mBrUUARCKa8.jpg',
    },
    {
      name: 'Михаил Журавлёв',
      text: `28 декабря первый раз с женой встали на сноуборды) впечатления просто не передать словами)
      Огромное спасибо команде "позитив" за такую возможность) отдельне спасибо инструкторам которые с нами няньчелись) побывали и на учебной трассе и на большой)
      Всё очень круто, "позитив" вы супер!!! Все дружелюбные, все на хорошем уровне организации, вообщем скажу так) ещё охота)))`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/mpcVEA1JfNQ.jpg',
    },
    {
      name: 'Мери Саюнц',
      text: `Ездила вчера в ЦАО Евразия вместе с Позитивом, покатались от души  🏂🤪🤘комфортный автобус, где нас ждал милый крафтовый пакет с завтраком - так приятно 🤗 организаторы Люба и Еркен - лучшие!)) А ещё у ребят теперь свой прокат! В общем, если кто-то до сих пор думает с кем поехать на горнолыжку- вэлком в ПозитиВ!!!`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/eU_9LHLfEsE.jpg',
    },
    {
      name: 'Оксана Корнева',
      text: `Мой путь с вами только начинается, ребят ))) но он обязательно продолжится 👍 я рада , что нашла такую группу , таких организаторов.. спасибо вам,ребята, огромное, потому что даже поехав с вами первый раз и совсем одна, я чувствовала себя комфортно🙂 Привезли, увезли на хороших автобусах под кинчики, мало того , что хорошо покатали, так ещё накормили, напоили )) че ещё надо для полного счастья 🔥 повар, тебе тоже отдельная пятюня 👋 в общем, я теперь только с вами и за вас .`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/zbWmvw1caQg.jpg',
    },
    {
      name: 'Марина Трошина',
      text: `Ребята, кто ещё думает, чем занять себя в выходные, подальше от серого города, эта группа для Вас!!!
      🗺🛶🏕🏔Разнообразие туров на любой вкус и возможности (1, 3 дня, неделя...))! 🏔🏂⛷🚣🏼‍♂Отличная компания, дружелюбная атмосфера и индивидуальный подход к каждому вам гарантирован!
      💃🕺👯‍♀Название группы «Позитив» говорящее и полностью оправданное!)`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/u2QFuOI7bLQ.jpg',
    },
    {
      name: 'Артём Лундин',
      text: `Огромное спасибо компании «Позитив» за крутейший Новый год. 3 дня плотного и активного веселья, запомнятся на целый год.

      Отдельная благодарность Еркену, организатор и учитель на высшем уровне, с нуля поставил меня на борд.

      С радостью поеду с вами ещё раз. ( и ещё много раз )`,
      link: 'https://vk.com/topic-112512427_34660772',
      img: './assets/img/review/3oTP0DqtJfU.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  clickReview(event){
    if (event.clientX < document.documentElement.clientWidth / 2 ) this. previousReview();
    else this.nextReview();
  }
  nextReview(){
    if (this.activeReview !== this.reviews.length - 1){
      this.activeReview++;
      this.activeButtonLeft = true;
    }
    if (this.activeReview === this.reviews.length - 1){
      this.activeButtonRight=false;
    }
  }
  previousReview(){
    if (this.activeReview !== 0){
      this.activeReview--;
      this.activeButtonRight=true;
    }
    if (this.activeReview === 0){
      this.activeButtonLeft = false;
    }
  }
  openReview(i){
    this.activeButtonRight=true;
    this.activeButtonLeft = true;
    if (i===0) this.activeButtonLeft = false;
    else if (i === this.reviews.length - 1) this.activeButtonRight=false;
    this.activeReview = i;
  }
}


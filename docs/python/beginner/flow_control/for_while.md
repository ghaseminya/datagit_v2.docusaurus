---
id: for_while
title: حلقه های تکرار
sidebar_label: حلقه های تکرار
hide_title: false
hide_table_of_contents: false
description: حلقه های تکرار|دیتاگیر
keywords:
  - آموزش مقدماتی Anaconda
  - آموزش Anaconda
  - نصب Anaconda
  - آموزش نصب Anaconda
  - نصب Anaconda در ویندوز
  - نصب Anaconda در لینوکس
  - نصب Anaconda در مک
  - آموزش مقدماتی آناکوندا
  - آموزش آناکوندا
  - نصب آناکوندا
  - آموزش نصب آناکوندا
  - نصب آناکوندا در ویندوز
  - نصب آناکوندا در لینوکس
  - نصب آناکوندا در مک
image: "/img/python/python-logo.svg"
---

import Image from '@theme/IdealImage';

## **حلقه while**

شاید برای شما هم پیش اومده باشه که بخواین یه کار تکراری رو انجام بدین و به این فکر کنین که چطور میشه اون رو به صورت اتوماتیک انجام داد. البته که جهان واقعی با جهانی کامپیوترها تفاوتی داره. ولی فرض کنید بخواید توی بی معنی ترین کار، اعداد 1 تا 100 رو پرینت کنین. اینکه بشینید و 100 تا دستور **print** بنویسین که قطعا کار عاقلانه ای نیست. برای همین میتونیم از ابزاری به اسم "حلقه تکرار" توی همه ی زبان های برنامه نویسی استفاده کنیم. پایتون هم دوتا حلقه بسیار معروف داره به اسم **for** و **while** (اکثر زبان ها به همین اسم هستن). این دوتا حلقه عملا کار یکسانی رو انجام میدن و یکسری تغییرات جزئی دارن. پس استفاده از اونها نسبتا به سلیقه شما بستگی داره. البته یه سری آدما میگن که حلقه for سریع تره ولی خب بعضیام خلافشو ثابت کردن پس نگران نباشین :).

کلا ایده اصلی حلقه **while** اینه:

تا وقتی شرط جلوی **while** درسته، کدهای بعد اون رو اجرا کن (به همین راحتی).

کد زیر رو در نظر بگیرید:

```python
shomare = 1

while shomare < 10:
  print(shomare)
  shomare = shomare + 1
```

اول از همه یک متغیر تعریف میکنیم و عدد 1 رو میذاریم توش. بعدش میگیم تا وقتی مقدار این متغیر (که اولش 1 هست) کمتر از 10 بود، اون مقدار رو پرینت کن. بعدش هم یکی به اون مقدار اضافه کن. بعدش دوباره برگرد بالا و چک کن ببین مقدار کمتر از 10 هست یا نه، اگر بود، دوباره این کار رو انجام بده. حالا فرض کنین **shomare = 9**  شد. میاد چک میکنه میبینه 9 از 10 کوچیکتره، پس چاپش میکنه و یکی بهش اضافه میکنه. دوباره میره بالا. چک میکنه میبینه که 10 از 10 کوچیکتر نیست. پس کدهای زیر while رو دیگه اجرا نمیکنه و اصطلاحا میگن از حلقه خارج میشیم. کد رو اجرا کنین حتما تا متوجه داستان بشین.

خب، به اون دو خط زیر **while** میگن بلوک کد (**Code Block**).

یه چیز جالبی هم بگم اینکه به این کدی که الان نوشتیم، میگن شمارنده. یعنی از یه عددی شروع میکنه به شمردن تا یه عدد دیگه.

 تمرین کنین ببینین میتونین شمارنده ای بسازین که اینطوری زیاد بشه:

```python
1، 3، 5، 7، 9، 11، 13، 15، 17، 19
```

## **حلقه for**

حلقه دوم اسمش **for** هست. یه تعریف سخت ازش میگم و مثالی میزنم که روشن تر بشین.

به ازای یک چیزی توی یک چیز دیگه، کارهای زیر رو انجام بده.

حالا این یعنی چی؟ مثلا زیر نشون میده قضیه رو:

```python
for yechizi in chize_dovom:

  ein_karharo_anjam_bde
```

البته واقعا مثال خوبی نبود فقط خواستم تعریفم خالی از برنامه نویسی نباشه :).

ولی مثال زیر واقعا دیگه مثال خوبیه:

```python
esm = "massoud"

for harf in esm:
  print(harf)
```

مثال بالا رو که اجرا کنید میبینید که حروف اسم من رو که توی متغیر **esm** هست به ترتیب چاپ میکنه. حالا فرض کنید یک اسم دیگه بنویسیم. به جای **massoud**، اسم خودتون رو بنویسید (ترجیحا به انگلیسی). اگر درست نوشته باشین میتونید حروف اسم خودتون رو ببینید. ولی اگر بخوایم یه برنامه بنویسیم که هر اسمی بهش میدیم، حروفش رو چاپ کنه، چطور بنویسیم؟ نمیشه که تمام اسم های دنیا رو توی برناممون بنویسیم که! اینجاست که باید این سوال رو از خودمون کنیم و جوابش کمک میکنه به جواب دادن به این سوالمون :

چرا اصلا از for استفاده می کنیم؟ این حلقه زمانی استفاده میشه که بخوایم یک سری کار محدود کنیم. یا مثلا ندونیم چند بار قراره این کار انجام بشه و تعداد تکرارمون رو ندونیم (مثل مثال اسم و اینا). چون هر اسمی بنویسیم، اول میذاره توی متغیر **esm**، بعدش میذاره توی حلقه **for** و چاپش میکنه!

یه مثال دیگه هم بزنیم (برای فهمیدن مفهوم لیست باید درس لیست در پایتون رو بخونید):

```python
list = [1,5,6,6,2,1,5,2,1,4]

for x in list:
  print(x)
```

یک مثال دیگه هم به اسم **generator** بگیم که اسمش خیلی قشنگه:

```python
for x in range(1,11):
  print(x)
```

این تابع میشه گفت تقریبا مثل تابع شمارنده هستش ولی خب یکم سریعتر و بهتر!
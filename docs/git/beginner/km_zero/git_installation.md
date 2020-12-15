---
id: git_installation
title: نصب Git
sidebar_label: نصب Git
hide_title: false
hide_table_of_contents: false
description: نصب Git|دیتاگیت
keywords:
  - آموزش مقدماتی Git
  - آموزش Git
  - نصب Git
  - آموزش نصب Git
  - نصب Git در ویندوز
  - نصب Git در لینوکس
  - نصب Git در مک
  - آموزش مقدماتی گیت
  - آموزش گیت
  - نصب گیت
  - آموزش نصب گیت
  - نصب گیت در ویندوز
  - نصب گیت در لینوکس
  - نصب گیت در مک
image: "/img/git_github/git-logo.svg"
---
import Image from '@theme/IdealImage';
import img1 from '@site/static/img/git/beginner/git_installation/git-installation-1.png';
import img2 from '@site/static/img/git/beginner/git_installation/git-installation-2.png';
import img3 from '@site/static/img/git/beginner/git_installation/git-installation-3.png';

## **نصب Git در ویندوز (Windows)**

برای نصب آخرین نسخه **Git** باید به سایت [**www.git-scm.com**](https://git-scm.com/) برید تا یک چیزی مثل شکل زیر ببینید:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img1} />
		</div>
	</div>
</div>

از قسمتی که مشخص کردم روی گزینه **Downloads** کلید کنید تا عکس زیر رو ببینید:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img2} />
		</div>
	</div>
</div>
حالا گزینه **Windows** رو انتخاب کنید تا عکس زیر بیاد:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img3} />
		</div>
	</div>
</div>
از قسمتی که با فلش مشخص کردم نسخه ۳۲ بیتی یا ۶۴ بیتی رو نسبت به سیستم عاملتون انتخاب کنید و دانلود کنید.

حالا دیگه فایلی رو که دانلود کردید اجرا کنید و آپشن های مورد نظر رو بخونید (اگر دفعه اولتونه، چیزی رو دست نزنید) و گزینه **Next** رو بزنید تا **Git** نصب بشه.

توی آخرین صفحه هم **Lunch Git Bash** رو تیک بزنید تا **Git Bash** براتون باز بشه. بدونید که **Git Bash** همون جایی هستش که میشه توش دستورات **Git** رو نوشت.

حالا دستور زیر رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!
:::

```bash title="bash"
$ git config --global user.name "Massoud"
```

بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!
:::

```bash title="bash"
$ git config --global user.email "massoud.maboudi@gmail.com"
```

## **نصب Git در مکینتاش (Mac)**

### نصب با Homebrew

اول از همه باید بگم که **Homebrew** یه **Package Manager** هستش که با استفاده از اون میتونید کلی پکیج های مختلفی نصب کنید و دردسرهای مختلف نصب اونها رو کم کنید.

برای اینکه با استفاده ازش بتونیم پایتون رو نصب کنیم باید اول **XCode** رو نصب کنیم یا اگر داریمش، آپدیتش کنیم. باید بدونید که **XCode** ابزاریه برای خود **Apple** که با اون میشه برای سیستم عامل های **iOS** برنامه نویسی کرد و البته کلی کار دیگه باهاش میشه انجام داد که توی این آموزش بهشون نیاز نداریم. برای نصبش کد زیر رو توی ترمینال بزنید:

```bash title="bash"
$ xcode-select --install
```

البته نصبش هم حجم زیادی از اینترنت رو مصرف میکنه (برای من ۲ گیگ مصرف کرد) و همینطور زمان زیادی میگیره. وسطش هم کلی سوال میکنه که باید تقریبا به همشون جواب مثبت بدید.

وقتی که تموم شد نصب **XCode**، باید بریم سراغ **Homebrew**. دستور زیر رو توی ترمینال بزنید:

```bash title="bash"
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

وقتی که تموم شد نصبش، برای اینکه ببینیم کارمون درست بوده یا نه، دستور زیر رو بزنید و نتیجه رو ببینید:

```bash title="bash"
$ brew doctor
Your system is ready to brew.
```

حالا وقتشه بریم سراغ **Git**.برای نصب آخرین ورژن **Git** میتونید دستور زیر رو بزنید توی ترمینال:

```bash title="bash"
$ brew install git
```

برای اینکه نتیجه عملمون رو ببینیم هم دستور زیر رو بزنید توی ترمینال:

```bash title="bash"
$ git --version
git version 2.26.1
```

حالا دستور زیر توی ترمینال رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!
:::

```bash title="bash"
$ git config --global user.name "Massoud"
```

بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!
:::

```bash
$ git config --global user.email "massoud.maboudi@gmail.com"
```

## **نصب Git در لینوکس (Linux)**

ساده ترین راه برای نصب **Git** توی سیستم عامل های مبتنی بر لینوکس به صورت دستورات زیره. دقت کنید که نسبت به نسخه لینوکستون دستور مورد نظر رو پیدا کنید.

```bash title="Debian/Ubuntu"
$ apt-get install git
```

```bash title="Fedora"
$ yum install git (up to Fedora 21)
$ dnf install git (Fedora 22 and later)
```

```bash title="Gentoo"
$ emerge --ask --verbose dev-vcs/git
```

```bash title="Arch Linux"
$ pacman -S git
```

```bash title="openSUSE"
$ zypper install git
```

```bash title="Mageia"
$ urpmi git
```

حالا دستور زیر توی ترمینال رو بزنید تا **Username** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای اسم من باید اسم خودتون رو بزنید!
:::

```bash
$ git config --global user.name "Massoud"
```

بعدشم دستور زیر رو بزنید تا **Email** که باهاش قرار **Commit** انجام بدید رو تنظیم کنید.

:::caution دقت کنید
به جای ایمیل من باید ایمیل خودتون رو بزنید!
:::

```bash
$ git config --global user.email "massoud.maboudi@gmail.com"
```

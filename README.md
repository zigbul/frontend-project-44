# **Brain Games** 
<a href="https://codeclimate.com/github/zigbul/frontend-project-44/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/d3d8f68ac6409433f547/maintainability" />
</a>

## **Описание проекта:**

Проект состоит иp 5-ти математических мини-игр:
  +**Brain Even**
  +**Brain Calc**
  +**Brain Gcd**
  +**Brain Progression**
  +**Brain Prime**

## **Установка:**

```
make install
```

## **Описание игр:**

### **Brain Even**

"Проверка на чётность".
Суть игры в следующем: пользователю показывается случайное число.
И ему нужно ответить "yes" , если число чётное, или "no" — если нечётное.
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
#### _Видео_
[![asciicast](https://asciinema.org/a/A29sljXGCa7IjR9sr6jEmq0PD.svg)](https://asciinema.org/a/A29sljXGCa7IjR9sr6jEmq0PD)

#### _Запуск_
```
brain-even
```
___

## **Brain Calc**

"Калькулятор".
Суть игры в следующем: пользователю показывается случайное математическое выражение,
например "35 + 16", которое нужно вычислить и записать правильный ответ.
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
#### _Видео_
[![asciicast](https://asciinema.org/a/DlGZSWYYzZItxVNz6mD54kQac.svg)](https://asciinema.org/a/DlGZSWYYzZItxVNz6mD54kQac)

#### _Запуск_
```
brain-calc
```
___

## Brain GCD

"Наибольший общий делитель (НОД)".
Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50.
Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
#### _Видео_
[![asciicast](https://asciinema.org/a/zDrp9QnSnoEDhmI0YLPixjx86.svg)](https://asciinema.org/a/zDrp9QnSnoEDhmI0YLPixjx86)

#### _Запуск_
```
brain-gcd
```
___

## Brain Progression

Игра показываем игроку ряд чисел, образующий арифметическую прогрессию, 
заменив любое из чисел тремя точками. Игрок должен определить это число.
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```
#### _Видео_
[![asciicast](https://asciinema.org/a/M3XKHF5SIK44SrTNjBRlp7RSU.svg)](https://asciinema.org/a/M3XKHF5SIK44SrTNjBRlp7RSU)

#### _Запуск_
```
brain-progression
```
___

## Brain Prime

"Простое ли число"
"Игроку на экран выводится число, нужно ответь "yes", если оно простое,
или "no", если нет.
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
#### _Видео_
[![asciicast](https://asciinema.org/a/59WidGyOFs4rIBzoichXyP3DA.svg)](https://asciinema.org/a/59WidGyOFs4rIBzoichXyP3DA)

#### _Запуск_
```
brain-prime
```
___

### Hexlet tests and linter status:
[![Actions Status](https://github.com/zigbul/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/zigbul/frontend-project-44/actions)

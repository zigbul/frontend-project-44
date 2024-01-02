# **Brain Games** 
<a href="https://codeclimate.com/github/zigbul/frontend-project-44/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/d3d8f68ac6409433f547/maintainability" />
</a>

## **Project description**

The project consists of 5 mathematical mini-games:
1. **Brain Even**
2. **Brain Calc**
3. **Brain Gcd**
4. **Brain Progression**
5. **Brain Prime**

## **Installing:**

```
make install
```

## **Games description**

### **Brain Even**

"Parity check".
The essence of the game is this: the user is shown a random number.
And he needs to answer “yes” if the number is even, or “no” if it is odd.
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
#### _Video_
[![asciicast](https://asciinema.org/a/A29sljXGCa7IjR9sr6jEmq0PD.svg)](https://asciinema.org/a/A29sljXGCa7IjR9sr6jEmq0PD)

#### _Launch_
```
brain-even
```
___

## **Brain Calc**

"Calculator".
The essence of the game is as follows: the user is shown a random mathematical expression,
for example "35 + 16", which needs to be calculated and the correct answer written down.
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
#### _Video_
[![asciicast](https://asciinema.org/a/DlGZSWYYzZItxVNz6mD54kQac.svg)](https://asciinema.org/a/DlGZSWYYzZItxVNz6mD54kQac)

#### _Launch_
```
brain-calc
```
___

## Brain GCD

"Greatest Common Divisor (GCD)".
The essence of the game is as follows: the user is shown two random numbers, for example, 25 50.
The user must calculate and enter the greatest common divisor of these numbers.
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
#### _Video_
[![asciicast](https://asciinema.org/a/zDrp9QnSnoEDhmI0YLPixjx86.svg)](https://asciinema.org/a/zDrp9QnSnoEDhmI0YLPixjx86)

#### _Launch_
```
brain-gcd
```
___

## Brain Progression

The game shows the player a series of numbers forming an arithmetic progression,
replacing any of the numbers with three dots. The player must determine this number.
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
#### _Video_
[![asciicast](https://asciinema.org/a/M3XKHF5SIK44SrTNjBRlp7RSU.svg)](https://asciinema.org/a/M3XKHF5SIK44SrTNjBRlp7RSU)

#### _Launch_
```
brain-progression
```
___

## Brain Prime

"Is it a prime number"
“The player is shown a number on the screen, you need to answer “yes” if it is simple,
or "no" if not.
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
#### _Video_
[![asciicast](https://asciinema.org/a/59WidGyOFs4rIBzoichXyP3DA.svg)](https://asciinema.org/a/59WidGyOFs4rIBzoichXyP3DA)

#### _Launch_
```
brain-prime
```
___

### Hexlet tests and linter status:
[![Actions Status](https://github.com/zigbul/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/zigbul/frontend-project-44/actions)

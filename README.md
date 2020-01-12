# Code

---

* Download code [github](https://github.com/simba-is-god-of-the-web/url-shortener-start/archive/pre-release.zip)
* Answer [github](https://github.com/simba-fs/url-shortener)

---

## admin

| line | description                       |
| ---- | --------------------------------- |
| 9    | check permission                  |
| 12   | get all record and send to client | 

---

## auth

| line | description                |
| ---- | -------------------------- |
| 11   | generate and save token    |
| 16   | verify token and delete it | 

---

## create

| line | description                                 |
| ---- | ------------------------------------------- |
| 8    | get code                                    |
| 9    | get url                                     |
| 10   | get ip                                      |
| 13   | send backdoor page to client                |
| 16   | check url isn't empty                       |
| 18   | check this is a valid url                   |
| 20   | exclude host itself                         |
| 22   | check if url is exist                       |
| 24   | if client havs permission, set custom  code |

---

## index

| line | description                      |
| ---- | -------------------------------- |
| 25   | get code                         |
| 28   | if don't find record, send error |

---

## misc

| line | description |
| ---- | ----------- |
| 22   | verify url  | 

---

## view

| line | description         |
| ---- | ------------------- |
| 13   | async               |
| 14   | get code            |
| 15   | find record from DB |
| 24   | send data to client | 
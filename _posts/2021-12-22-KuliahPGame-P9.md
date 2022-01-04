---
title: Kuliah Pemrograman Game P9
published: true
---

## PERTEMUAN SEMBILAN 09 :

|Status  | : Offline                |
|Schedule| : Offline                |
|Waktu   | : 22/12/2021             |
|Tema    | : Pemrograman Game P9    |

## Mengulang Meteri :
Pada pertemuan ini yang akan dibahas adalah :  
* Evaluasi UTS
* Kondisional ([Prak 6](KuliahPGame-P6.html){:target="_blank"}) dan,
* Fungsi ([Prak 7](KuliahPGame-P7.html){:target="_blank"})


## Kerjakan Praktukum dan Kumpul ke dropbox

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya saat praktikum offline dan bisa lewat grup WA atau langsung WA personal saat online...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.

### Code Jawawan UTS : praktikum9_1_pgame_npm.py

```python
# buat dua buah list daftar buah
buah2an1={"Mangga","Salak","Durian","Belimbing"}
buah2an2={"Mangga","Salak","Anggur","Jeruk","Durian","Alpukat"}


print("\n")
print("Daftar Buah 1 : ")
print(buah2an1)
print('-------------------------------')
print("Daftar Buah 2 : ")
print(buah2an2)

print("*" * 35)
## intersection = mengambil data yang sama antara dua buah set
print("Daftar Buah yang Sama:")
print(buah2an1.intersection(buah2an2))

## difference = mengambil data yang beda antara dua buah set
print("Daftar Buah yang Beda:")
print(buah2an2.difference(buah2an1))
print("\n")


```



### Code Kondisional : praktikum9_2_pgame_npm.py

```python
A=input("Masukkan NILAI A:")
B=input("Masukkan NILAI B:")

if A > B:
    print("A > B")
elif A == B:
    print("A = B")
elif A < B:
    print("A < B")
else:
    print("Selain Kondisi Diatas ")


```


### Code Fungsi : praktikum9_3_pgame_npm.py

```python

# def : 
# 1. digunakan untuk memulai mendefinisikan
#    sebuah fungsi, 
# 2. semua fungsi di python diawali dengan "def" 
# CONTOH DIBAWAH : 
# nama fungsi : "ceknama"
# parameter inputan : "nama"

def ceknama(nama):
    if nama:
        print("Halooo..", nama )
    else: 
        print("Tidak ada nama yang diinput !")

i_nama=input("Masukkan Nama : ")

# memanggil fungsi "ceknama"
ceknama(i_nama)

```



---
By: ikhwan@fedora-linux

---
title: Kuliah Pemrograman Jaringan
published: true
---

## PERTEMUAN KeSEMBILAN 09 - UTS :

|Status   | : Online                   |
|Schedule | : Online                   |
|Waktu    | : 10/12/2020               |
|Tema     | : Praktikum 8 UTS          |


### File PDF Praktikum 8 - UTS :

Silahkan download file praktikumnya, harap dibaca dan lakukan UTS sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 8 UTS](assets/reff/pjar/Praktikum_PJar_8_UTS.pdf){:target="_blank"}


### Arahan Untuk Praktikum 8 - UTS :

Lakukan UTS sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, setelah itu silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.

### Waktu Kumpul

Hasil UTS yang dikerjakan Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 11/12/2020 Jam 09.30`


***
***


## PERTEMUAN KeDELAPAN 08 :

|Status   | : Offline                  |
|Schedule | : Offline                  |
|Waktu    | : 04/12/2020               |
|Tema     | : Praktikum 7              |


### File PDF Praktikum 7 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 7](assets/reff/pjar/Praktikum_PJar_7.pdf){:target="_blank"}

### Materi Praktikum

Telnet, SSH adalah protokol jaringan yang memungkinkan pertukaran data melalui jalur aman antara dua perangkat jaringan. Silahkan lanjutkan praktikum mengikuti arahan yang ada di file pdf yang didownload...


### Arahan Untuk Praktikum 7 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum yang dikerjakan di LAB (Offline) Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 04/12/2020`


***
***



## PERTEMUAN KeTUJUH 07 :

|Status  | : Online                   |
|Schedule | : Offline                 |
|Waktu   | : 28/11/2020               |
|Tema    | : Praktikum 6              |


### INFO `UTS`

<b> DIINFORMASIKAN KEPADA SEMUA MAHASISWA, INSYA-ALLAH MINGGU DEPAN (sabtu 05/12/2020) `UTS UNTUK PJaringan` </b>


### File PDF Praktikum 6 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 6](assets/reff/pjar/Praktikum_PJar_6.pdf){:target="_blank"}

### Materi Praktikum

Telnet, SSH adalah protokol jaringan yang memungkinkan pertukaran data melalui jalur aman antara dua perangkat jaringan. Silahkan lanjutkan praktikum mengikuti arahan yang ada di file pdf yang didownload...


### Arahan Untuk Praktikum 6 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Sabtu 05/12/2020`


***
***


## netifaces to scapy [praktikum 4]

Materi ini atau script dibawah cukup lakukan praktikum untuk tambahan saja dan tidak harus dikumpuk/upload ke dropbox,
tapi yang mau upload boleh dan akan dipertimbangkan sebagai nilai tambahan...



Pada Materi Praktikum 4 Untuk teman2 yang menggunakan Windows dan gagal install `netifaces` pada praktikum 4
bisa mencoba modul lain yaitu `scapy`,
#### Install `scapy`
    - pip3 install scapy
    - atau : pip3 install --user scapy

#### The Script :

```py

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 4 PJaringan
# * Get Network Interface Name
# * Get IP From Network Interface
# * Simpan : praktikum4_net-win_npm.py
# ----------------------------
import scapy.all as sc

print("")
for l in sc.get_windows_if_list():
    try:
        print(" {:<20} : {}".format("Nama Interface",l["name"]))
        print(" {:<20} : {}".format("IP Address",l["ips"][1]))
        print(" {:<20} : {}".format("MAC Address",l["mac"]))
        print(" {:<20} : {}".format("Deskripsi",l["description"]))
        print("-"*35)
    except:
        pass

```

#### Hasil Screenshot :

Hasil dari Script diatas saat dijalankan pada mesin Windows 10 dalam tangkapan layar (screenshot) :

![Screenshot Get Interface](assets/reff/pjar/sc_get_net_iface.png)


***
***




## PERTEMUAN KeENAM 06 :

|Status  | : Online                   |
|Schedule | : Online                   |
|Waktu   | : 21/11/2020               |
|Tema    | : Praktikum 5              |

### File PDF Praktikum 5 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 5](assets/reff/pjar/Praktikum_PJar_5.pdf){:target="_blank"}

### Materi Praktikum

Telnet, Telnet merupakan perintah yang digunakan untuk komunikasi interaktife dengan host lainnya menggunakan protokol TELNET. Lebih lanjut silahkan baca di modul...


### Arahan Untuk Praktikum 5 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Sabtu 28/11/2020`


***
***


## PERTEMUAN KeLIMA 05 :

|Status   | : Online                   |
|Schedule | : Offline                  |
|Waktu    | : 13/11/2020               |
|Tema     | : Praktikum 4              |

### File PDF Praktikum 4 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 4](assets/reff/pjar/Praktikum_PJar_4.pdf){:target="_blank"}


### Arahan Untuk Praktikum 4 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 20/11/2020`


***
***

## PERTEMUAN KeEMPAT 04 :

|Status  | : Online                   |
|Schedule | : Online                   |
|Waktu   | : 10/11/2020               |
|Tema    | : Praktikum 3              |

### File PDF Praktikum 3 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 3](assets/reff/pjar/Praktikum_PJar_3.pdf){:target="_blank"}


### Arahan Untuk Praktikum 3 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. <b>TUGAS:</b> Ambil beberapa SCREENSHOT Hasil Praktikum anda dan simpan dalam bentuk FORMAT file  PDF.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...


### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Selasa 17/11/2020`


***
***

## PERTEMUAN KeTIGA 03 :

|Status  | : Online                   |
|Schedule | : Offline                  |
|Waktu   | : 30/10/2020               |
|Tema    | : Praktikum 2              |

### File PDF Praktikum 2 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 2](assets/reff/pjar/Praktikum_PJar_2.pdf){:target="_blank"}


### Arahan dan Materi Praktikum :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...


### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 06/11/2020`


***
***


## PERTEMUAN KEDUA 02 :

|Status  | : Online                   |
|Schedule | : Online                   |
|Waktu   | : 23/10/2020               |
|Tema    | : Praktikum 1              |


### File PDF Praktikum 1 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 1](assets/reff/pjar/Praktikum_PJar_1.pdf){:target="_blank"}



### Arahan dan Materi Praktikum :
1. Untuk Seluruh Mahasiswa agar segera download file praktikum 1 dan lakukan praktikum mandiri di komputernya masing-masing
2. Materi Praktikum 1 adalah pengenalan python socket, Untuk yang ingin mengenal lebih jauh tentang socket dapat melihat materi tambahan yang tersedia di tautan berikut : [Materi Tambahan Python](downloads.html){:target="_blank"}
3. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
4. Sangat disarankan untuk Mahasiswa agar melakukan praktikum dalam kelompok belajar atau bersama teman2 agar mudah dan cepat memahami materi, dan bagi teman2 yang sudah paham sangat diharapkan dapat membimbing teman2 yang belum paham, dan bagi teman2 yang belum paham agar tidak segan untuk bertanya...

### Waktu Kumpul
- Diharapkan Kepada Mahasiswa agar sudah menyelesaikan praktikum 1 dan mengumpulkannya ke folder `PJaringan` di `dropbox` nya masing2 paling lambat hari `Senin 26/10/2020 23.59`



***
***



## PERTEMUAN PERTAMA 01 :

|Status  | : Offline                    |
|Schedule | : Offline                    |
|Waktu   | : 16/10/2020                 |
|Tema    | : Arahan dan Kontrak Kuliah  |



### Variabel dan Persentase Penilaian :
- Absen  : 40 %
    - Absen Untuk Pertemuan Online dihitung berdasarkan yang mengumpulkan file praktikum
- Tugas  : 40 %
    - Tugas yang AKAN DINILAI adalah tugas yang dikerjakan dan dikumpulkan SESUAI DENGAN KETENTUAN,
    - Setiap tugas akan disampaikan ketentuan apa saja yang harus dipenuhi, dari format penulisan sampai dengan ketentuan pengumpulan tugas
    - Umumnya ketentuan yang harus selalu diperhatikan adalah ISI TUGAS, BATAS WAKTU PENGUMPULAN TUGAS dan PENAMAAN FILE TUGAS, serta FORMAT atau TEMPLATE TUGAS.
- UTS dan UAS : 20 % (UTS 10% dan UAS 10%)

### Yang Harus Dipersiapkan :

1. Untuk Pemrograman Jaringan, bahasa pemrograman yang akan digunakan adalah bahasa pemrograman python,
2. Semua yang perlu dipersiapkan untuk pemrograman jaringan sama dengan yang ada pada pemrograman game kecuali untuk beberapa modul yang perlu ditambahkan seperti telnet, paramiko dan netmiko
3. Untuk mengumpulkan tugas dan lainnya secara online akan menggunakan dropbox,
4. Setiap Mahasiswa harap melengkapi laptopnya dengan vm (virtualbox atau vmware) yang terinstall python pada keduanya host dan vm,


***
By : Ikhwan

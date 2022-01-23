---
title: Kuliah Pemrograman Game P11
published: true
---


## PERTEMUAN SEBELAS 11 :

|Status  | : Offline                       |
|Schedule| : Offline                       |
|Waktu   | : 19/01/2022                    |
|Tema    | : Praktikum 10 Pemrograman Game |


### Modul Praktikum 10

1. Diharapkan Mahasiswa mengikuti arahan yang ada di modul dalam mengerjakan praktikum setelah mendownload modulnya pada tautan dibawah ini
2. Doanload Modul berikut : [Modul Praktikum 10](assets/reff/pgame/Modul_Pgame_prak_10.pdf){:target="_blank"}


### HASIL Praktukum Kumpul ke dropbox

1. Mahasiswa diharapkan membaca Modul dan melakukan praktikum sesuai dengan arahan yang ada di modul,

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya bisa lewat grup WA atau langsung WA personal...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.


### Waktu Kumpul

- Diharapkan agar sudah mengumpulkan hasil praktikum Pemrograman Game ke folder `PGame` di `dropbox` nya masing2, sebelum pertemuan akan datang.

***




```python 


# Simpan dengan nama : code10.py
# Pemrograman Game Praktikum 10
# latihan code 10.1 : PyGame
import pygame

pygame.init()
screen = pygame.display.set_mode((640, 480))
done = False

warna_font = (233, 225, 0)
warna_bg_font = (0, 2, 225)
warna_bg = (255, 55, 255)

font = pygame.font.SysFont("comicsansms", 72)

text = font.render("Hello, World", True, \
		warna_font, warna_bg_font)

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        if event.type == pygame.KEYDOWN and \
			event.key == pygame.K_ESCAPE:
            done = True
    
    screen.fill(warna_bg)
    screen.blit(text, (220 - text.get_width() // 2,\
	240 - text.get_height() // 4))
    
    pygame.display.flip()

```


* Next code... gambar garis...


```python

# Simpan dengan nama : praktikum9_pygame1_npm.py
# Pemrograman Game Praktikum 9
# Latihan 1. : PyGame

import pygame

pygame.init()
screen = pygame.display.set_mode((540, 340))
done = False

warna_font = (233, 225, 0)
warna_bg_font = (0, 2, 225)
warna_bg = (255, 55, 255)

font = pygame.font.SysFont("comicsansms", 52)

text = font.render("Hallo Informatika ! ", True, \
		warna_font, warna_bg_font)

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        if event.type == pygame.KEYDOWN and \
           event.key == pygame.K_ESCAPE:
            done = True

    screen.fill(warna_bg)

    # bisa gunakan : get_height() dan get_width()
    # screen.blit(text, (50,	\
    #    (screen.get_height() // 2) - text.get_height()  ))

    screen.blit(text, (50,	160  ))

    pygame.display.flip()


```

***
By: ikhwan@fedora-linux
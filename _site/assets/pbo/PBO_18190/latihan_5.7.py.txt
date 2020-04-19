status = False
batas = 3
tabel_username =["admin", "sayaadmin", "sayajugaadmin"]
tabel_password =['ummu', 'ternate', 'akademik']
while batas > 0:
    tanya_username = input("Masukkan Username Anda: ")
    tanya_password = input("Masukkan password Anda: ")
    for password in tabel_password:
        for a_username in tabel_username:
            if tanya_password == password and tanya_username == a_username:
                print("Selamat Anda berhasil Login")
                status = True
                break
    for not status:
           print ("Password & Username yang anda masukan salah, silahkan login kembali")
           batas = batas - 1
           continue
        else:
            break

            

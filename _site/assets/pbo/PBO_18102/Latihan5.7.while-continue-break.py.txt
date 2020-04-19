status = False
batas = 3
tabel_username =["admin","sayaadmin","sayajugaadmin"]
tabel_password =['ummu','ternate','akademik']
while batas > 0:
    tanya_username = input("masukan username anda: ")
    tanya_password = input("masukan password anda: ")
    for password in tabel_password:
        for a_username in tabel_username:
            if tanya_password == password and tanya_username == a_username:
                print ("selamat anda berhasil login")
                status = True
                break
    if not status:
        print ("password & username yang anda masukan salah, silahkan login kembali")
        batas = batas - 1
        continue
    else:
        break
#while break
while True:
    a_username = input ("Masukan Username : ")
    a_password = input ("Masukan Password : ")

    if a_username == "admin" and a_password == "ternate":
        print("Selamat Anda Berhasil Login :)")
        break
    else:
        print("Username & Password tidak sesuai, silahkan kembali login")
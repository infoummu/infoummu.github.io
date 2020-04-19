#Pengulangan for
my_word = "Hello Everyone, Welcome"
for word_baru in my_word:
    print("for string : ", word_baru)

my_list = ["You", "And", "I"]
my_tuple = (2, 6, 8, 10)
for word_baru3 in my_tuple:
    print("for list or tuple", word_baru3)

    

#Pengulangan while
i = 1
while i <= 10:
  print('Welcome to Vividaaaailyy Channel')
  i += 1



# contoh penggunaan statement break
for admin in "Programming":
    if admin == "g":
        break
    print("Huruf sekarang:", admin)
print("Good bye")



# contoh penggunaan statement continue
for admin in "Programming":
    if admin == "":
        continue
    print("Huruf sekarang:", admin)
print("Good bye")
***
### fungsi reverse
fungsi reversed() berfungsi untuk menghasilkan iterator yang berisi kembalikan dari suatu sequence sedangkan sort berfungsi untuk mengurutkan suatu iterabel baik secara naik maupun turun


***
### contoh kodenya pada reversed

```Python
string = 'pythonindo'
print(list(reversed)(string))

lst = [1,2,3,4,5]
print(list(reversed(lst)))
``` 

***
### contoh code pada sort

```Python
pylist = ['e','a','u','i','o']
word = 'python'

print(sorted(pylist))
print(sorted(word))
print(sorted(pylist, reverse=True))

def takesecond(elem):
	return elem[1]

random = [(2,2), (3,4), (4,1), (1,3)]
sortedlist = sorted(random, key
=takesecond)
print('sorted list:', sortedlist)

```

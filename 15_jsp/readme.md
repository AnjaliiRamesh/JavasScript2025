EventBubbling -> jab nested elements ho to agar aap ek ele ko click karoge to uskaparent element bhi trigger hoga let say div->ul->li->li->li
to jab aap div pe click karoge to sirf div aayega kyuki abhi div ka koi parent ele nhi h
jab ul to div and ul dono trigger honge kyuki ul ka parent div h
jab li pe karoge to div ,ul aur li  trigger honge
isko rokne ke liye we use stopPropagation();
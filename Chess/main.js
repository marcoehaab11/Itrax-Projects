document.write('<table>');
for (let x =1; x <=8; x++) {
    document.write('<tr>');
    for (let i = 1; i <=8; i++) {
        let total=i+x;
        if (total%2==0) {
             document.write(`<td class="b1"></td>`); 

        }else{
              document.write(`<td class="b2"></td>`); 

        }

    }
    document.write('</tr>');
}
document.write('</table>');

import reverseString from "../../code/string/344_Reverse_String";

const s = ["h","e","l","l","o"]
test('s',()=>{
    expect(reverseString(s)).toEqual(["o","l","l","e","h"])
})

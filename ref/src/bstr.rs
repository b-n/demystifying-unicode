use bstr::ByteSlice;

fn main() {
    let raw: &[u8] =
        b"\x80\x90\xF0\x9F\x99\x84Pl\xF0\x9F\x98\xBBain\xF0\x9F\x98\xBEText!\x80\x80\x80";

    let cats: String = raw
        .chars()
        .filter(|c| ('\u{1F638}'..'\u{1F640}').contains(c))
        .collect();

    println!("Cats: {}", cats);
}

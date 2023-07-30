use std::io::prelude::*;

fn main() {
    let mut file = std::fs::File::create("ref/plain_text.txt").unwrap();

    let buf: &[u8; 12] = b"Plain\x80 Text!";

    let bytes_written = file.write(buf).unwrap();

    println!("Written: {bytes_written}, Contents {buf:02X?}");
}

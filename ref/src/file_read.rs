use std::io::prelude::*;

fn main() {
    let mut file = std::fs::File::open("ref/plain_text.txt").unwrap();

    let mut buf: Vec<u8> = vec![];

    let bytes_read = file.read_to_end(&mut buf).unwrap();

    println!("Bytes: {bytes_read}, Contents {buf:02X?}");
}

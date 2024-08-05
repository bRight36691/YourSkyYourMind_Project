"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toJpeg } from "html-to-image";
import UAParser from "ua-parser-js";
import { DownloadIcon } from "~/component/DownloadIcon";
import { ShareIcon } from "~/component/ShareIcon";
import { IgLogo } from "~/component/IgLogo";

export default function Page() {
  const [idx, setIdx] = useState<number>(0);
  const [burnoutScore, setBurnoutScore] = useState<string>();
  const burnoutQuarter = Math.min(
    Math.floor(Math.max(Number(burnoutScore) - 1, 0) / 25),
    3,
  );
  const [name, setName] = useState<string>();
  const [userAgentData, setUserAgentData] = useState<string>();

  const skyColors = [
    "แสงแรกแห่งวัน",
    "แสงแดดรุ่งอรุณ",
    "ส้มเลืองสายัณห์",
    "น้ำเงินเหมันต์",
    "แสงเหนือ",
    "ราตรีประดับดาว",
    "แสงจันทร์ยามค่ำคืน",
    "คืนมืดมิด",
    "สายรุ้งในวันสดใส",
    "Golden Cloud",
    "ม่วงชมพูสะท้อนทิวเขา",
    "พระอาทิตย์ตกดิน",
    "ฟ้าทิวาสดใส",
    "ชมพูเหลืองชวนฝัน",
    "ก่อนฝนตก",
    "ยามเย็นแดงโอรส",
    "ฟ้าชมพูพาสเทล",
    "ม่วงส้มริมหาดทราย",
    "ก่อนตะวันลับขอบฟ้า",
    "ค่ำคืนที่ไม่เคยมืดมิด",
  ];

  const desc = [
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าที่สดใส เรียบง่ายและ อบอุ่น แต่ภายในใจลึก ๆ คุณคือคนที่สงบ และแข็งแกร่ง และปรับตัวเก่งสามารถปรับตัวเองได้เข้ากับทุกสภาพแวดล้อม ในช่วงชีวิตที่ผ่านมาคุณเจออะไรมามาก ทั้งสุขและทุกข์ แต่คุณมีกลไกทางจิตใจที่ดี ทำให้คุณยังคงสดใส และส่งต่อพลังงานดี ๆ ได้ อีกทั้งคุณยังเป็น safe zone ให้กับผู้อื่นอยู่บ่อยครั้ง ท้องฟ้าของคุณ จึงเต็มไปด้วยแสงยามรุ่งอรุณที่สดใส พร้อมเผชิญกับสิ่งต่าง ๆ ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าที่อบอุ่น สะท้อนถึงคุณเป็นคนที่มีความสบาย ชิล ๆ  และไม่ชอบความวุ่นวาย รักความถูกต้องและยุติธรรม อบอุ่น เแต่ลึก ๆ แล้วใจดี ชอบอยู่ใน safe zone ของตัวเอง แต่คุณเองก็เป็น safe zone ให้กับผู้อื่นอยู่บ่อยครั้งอีกด้วย อาจจะมีเหนื่อยบ้าง แต่คุณก็ยังคอยซัพพอร์ตคนรอบข้างเสมอ ท้องฟ้าของคุณ จึงเต็มไปด้วยแสงแดดที่อบอุ่น เสมือนคุณที่คอยเป็นที่พึ่งทางใจให้คนใกล้ชิด ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้ายามพระอาทิตย์กำลังลับขอบฟ้า ตกเย็นเหมือนกับวันทั่ว ๆ ไป คุณเจออะไรมามาก และคงเหนื่อยกับมัน คุณมักจะคิดถึงความอบอุ่นและช่วงเวลาที่ได้อยู่ในที่ที่สงบ กับงานอดิเรกที่คุณชอบ และคนที่คุณรัก ซึ่งคุณมักจะใส่ใจและแบ่งปันเรื่องราวของชีวิตไปด้วยกัน ท้องฟ้าของคุณ เปรียบเสมือนความทุ่มเทของคุณ ที่มักจะทำทุกอย่างให้เต็มที่ในทุกวัน แม้จะเหน็ดเหนื่อยก็ตาม ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าตอนเย็นในฤดูหนาว พระอาทิตย์ลับขอบฟ้าไวกว่าปกติ ดูไม่สดใสและเงียบสงบ แต่ก็ยังคงแสงจาง ๆ ไว้ เปรียบเสมือนคุณ ที่ไม่ว่าจะเจออุปสรรคใด หรือท้องฟ้าจะมืดมากเพียงใด ก็ยังคงมีความเป็นตัวเอง และมีแสงแห่งความหวังในใจเสมอ คุณเป็นคนอบอุ่นแต่มีโลกส่วนตัวค่อนข้างสูง ท้องฟ้าของคุณจึงเป็นตัวแทนแห่งในใจ ที่คนใกล้ชิดเท่านั้นที่จะหาเจอก่อนจะมืดลง และรอคอยพระอาทิตย์ยามเช้าอีกครั้ง ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ ไม่ง่ายเลยที่จะได้เห็น แสงเหนือ คือปรากฎการณ์ ออโรรา (aurora) เป็นปรากฏการณ์ทางธรรมชาติ ที่มีการเรืองแสงบนท้องฟ้าในเวลากลางคืน เป็นแสงที่ลอดออกมาจากท้องฟ้าที่สงบนิ่งแต่เต็มไปด้วยแสงดาว คุณเป็นคนอ่อนไหว แต่สงบนิ่งจากภายใน เวลาพักผ่อนของคุณคือเวลาที่ได้ใช้อยู่กับตัวเอง และคุณสามารถนำความสงบสุขนี้ส่งต่อไปถึงจิตใจผู้อื่นเช่นกัน ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าสีน้ำเงินที่เปล่งประกายไปด้วย ดวงดาวทั่วท้องฟ้า คุณเป็นคนอ่อนไหวและเข้มแข็ง ค่ำคืนที่สงบและได้อยู่กับตัวเองคือสิ่งที่นิยามตัวตนของคุณ  ในบางครั้งคุณรู้สึกไม่ดีพอ หรือเดินตามหลังผู้อื่นอยู่ แต่ลึก ๆ แล้วนั้น คุณเป็นคนที่ใคร ๆ ต่างก็ชื่นชมและเก่งมากไม่น้อยเลย ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้ายามค่ำคืนมีดวงจันทร์ส่องแสงสว่างไสว ซึ่งเป็นการบรรจบกันของโลกแห่งความฝันในอดีตและความจริง คุณเป็นคนช่างฝัน คุณอาจเป็นคนที่ปล่อยตัวเองให้ไหลไปตามความคิด และเรื่องราวมากมาย จนบางทีก็รู้สึกเหมือนถูกสะกดอยู่ในค่ำคืนที่ไร้จุดจบ หากคุณเหนื่อยล้า ผู้คนอาจไม่สังเกตเห็นขนาดนั้น แต่เมื่อมองเข้าไปภายในจิตใจลึก ๆ คุณอาจต้องการพักพิงและพักผ่อน ท้องฟ้าอยากบอกคุณว่า แสงจันทร์ที่เข้มแข็ง ก็ต้องการเวลาพักในบางค่ำคืน :) ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ ผืนฟ้าเป็นสีน้ำเงินลึกลับ ท้องฟ้ายังคงเป็นสีเข้มและดูนิ่งลึก หากเอนกายลงไปในท้องฟ้าอาจถูกโอบรับไปด้วยความเงียบและความสงบ ตัวคุณเองถึงแม้จะดูนิ่งและผ่อนคลาย แต่ในใจลึก ๆ อาจมีความเหนื่อยล้าและความเหงา ถาโถมเข้ามาสักพักแล้ว ท้องฟ้าผืนนี้จึงเป็นตัวแทนที่จะบอกคุณว่า ในค่ำคืนที่อ่อนล้าและเงียบสงบ ยังคงมีดวงจันทร์ในใจของคุณคอยให้กำลังใจและให้แสงสว่างกับคุณเสมอ ท้องฟ้าอยากบอกคุณว่า",
    "คุณมักจะเป็นบุคลิกที่รักอิสระ ชอบคิดนอกกรอบ ทะเยอทะยาน สร้างสรรค์ ฝันเฟื่อง และเป็นมิตร มีจินตนาการที่ยอดเยี่ยม มีความคิดใหม่ ๆ ที่แตกต่างไปจากคนอื่นอยู่เสมอ คุณพร้อมที่เปิดรับการเปลี่ยนแปลงอยู่เสมอ และไม่กลัวที่จะก้าวเดินต่อไป นอกจากนี้คุณยังมีจิตใจที่เข้มแข็งคอยเป็นพลังบวกให้กับผู้อื่น และพร้อมเผชิญหน้า ขอให้รักษาพลังดี ๆ นี้ไว้ภายในจิตใจของคุณต่อไป ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้ายามเย็นที่พระอาทิตย์สาดส่องแสงสีส้มลงมากระทบก้อนเมฆ คุณเป็นคนใจกว้าง มีน้ำใจ ชอบช่วยเหลือคนอื่น ยอมเสียสละเพื่อผู้อื่นได้ แต่คุณดันชอบเก็บปัญหาไว้กับตนเอง เปรียบเสมือนผู้ที่สามารถพึ่งพาได้อยู่เสมอ และมีความอบอุ่นสาดส่องลงมา แต่ลึก ๆ ในใจ คุณอาจจะยังต้องการคนมาดูแลเช่นกัน :) ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าที่มีกลิ่นอายของภูเขาหลังพระอาทิตย์ลับของฟ้า สีที่ดูเข้มแข็งและส่งผ่านความกล้า ความสวยงามยามค่ำคืนกลางภูเขา เปรียบเสมือนตัวคุณที่ทะเยอทะยาน รักอิสระ และเข้มแข็ง ผ่านความท้าทายมานานและอาจต้องการเวลาพักผ่อนสักช่วงนึง ท่ามกลางหุบเขาในใจของคุณ ดูท่าจะอ่อนล้า แต่ยังคงมีท้องฟ้าสีที่แข็งแกร่งและพร้อมลุยต่อในอนาคต ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าที่สาดลงมาด้วยแสงพระอาทิตย์ยามเย็น มีนวลของสีส้มเหลืองทองคล้ายว่าตะวันนั้นไม่อยากที่จะลับขอบฟ้าไป คุณเป็นคนคนแข็งแกร่ง แน่วแน่ และทะเยอทะยาน คุณสามารถฝ่าฟันปัญหาที่พบเจอมาได้บ่อยครั้ง ในบางครั้งคุณกลับพบเจอปัญหาที่หนักหนาจนเหนื่อยล้า แต่ภายในใจของคุณ ยังคงเป็นท้องฟ้าที่มีสีของพระอาทิตย์ที่แข็งแรง และดูพึ่งพาได้เสมอ และยามเย็นก่อนพระอาทิตย์ลับของฟ้าของคุณนั้น จะนำพาค่ำคืนที่งดงามมาในเวลาต่อไป ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ เป็นสีฟ้าสดใส แสงแดดจ้า เมฆบางเบาลอยล่องไปตามสายลม คุณเป็นคนใส่ใจคนรอบข้าง และเป็นพลังบวกให้กับคนรอบตัว คุณเป็นคนที่มีคนให้นึกถึง และมีคนให้ความรักรอบตัวคุณ จิตใจที่เข้มแข็งและสดใสของคุณนั้น นำพาพลังบวกมาสู่ทุกคนโดยตลอด ถ้าวันไหนที่คุณอ่อนล้า คุณก็จะยังคงมีเรื่ิองให้ยิ้มได้เสมอ ท้องฟ้าของคุณสามารถสร้างวันดี ๆ ให้ทุกคน ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ เป็นสีชมพูอมส้มคล้ายเสาวรส มีสุขบ้าง มีทุกข์บ้าง มีรสเปรี้ยวหวานปนกันไป หากคุณเผชิญหน้ากับเรื่องราวต่าง ๆ คุณก็จะยังมีสีสันที่น่าค้นหา และสามารถทำให้ทุกเรื่องกลายเป็นเรื่องท้าทายได้ คุณเป็นคนใส่ใจคนรอบข้างและเป็นที่พักพิงให้คนรอบตัว แต่บางครั้งคุณก็ต้องการที่พักพิงที่คุณไว้ใจ ในยามที่อ่อนล้าเหมือนกัน อย่าลืมพักผ่อนเยอะ ๆ นะ ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าสีส้มจากพระอาทิตย์ตก แซมริ้วน้ำเงินจากท้องฝ้ายามดึก มีริ้วเมฆฝนที่เคลื่อนตัวไปตามกาลเวลา คุณเป็นคนอบอุ่นคล้ายท้องฟ้ายามค่ำคืน รักเพื่อน รักคนรอบตัว และเป็นที่พึ่งพิง ในบางครั้ง คุณอาจรู้สึกว่าตนเองด้อยค่า หรืออ่อนล้าจากสังคม แต่ตัวตนของคุณ ก็ยังคงเข้มแข็งและพร้อมที่จะสู้ต่อในวันข้างหน้าอยู่เสมอ คล้ายกับริ้วเมฆที่อยู่รวมกันจนดูเป็นตาข่ายที่แข็งแกร่ง หาที่พักพิงสักพักแล้วลุยต่อนะ ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้าตอนเย็นในวันที่เมฆบดบัง สีแดงแผ่ผ่านเมฆมาจนท้องฟ้าดูมืดครึ้ม แต่ก็ยังมีแสงที่อบอุ่นและสร้างทิวทัศน์ที่เติมเต็มหัวใจ คุณเป็นคนอบอุ่น มีคนรักรอบตัว มีคนคอยซัพพอร์ตและใส่ใจกับสิ่งรอบตัวมากมาย จิตใจที่อ่อนไหวกับสิ่งต่าง ๆ อาจทำให้คุณรู้สึกอ่อนล้าในบางครั้ง แต่ขอให้รู้ไว้ว่า ในวันที่เมฆยามเย็นดูมืดครึ้ม คุณยังคงสวยงามและสร้างความรู้สึกปลอดภัยแก่คนรอบตัวได้เสมอ ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือสีชมพูอ่อน ๆ คล้ายกับโลกในจินตนาการ ดูสดใส ชวนคิดถึงเรื่องราวเพ้อฝัน ค้นหาสิ่งใหม่ ๆ และผจญภัยไปกับเรื่องราวน่าจดจำ คุณเป็นคนชอบความสนุก เรื่องชวนฝัน และมีจิตใจที่เข้มแข็ง การใช้ชีวิตไปตามหัวใจและเอนจอยไปกับทุกเรื่องราว ทำให้คุณเป็นคนที่น่าดึงดูด และสร้างพลังบวกแก่คนรอบข้างได้มากมาย สีพาสเทลของท้องฟ้าจึงเป็นจุดเด่นของคุณ ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ เป็นสีท้องฟ้าที่ดูสนุกสนาน แต่มีเรื่องราวให้คิดมากมายคล้ายกับจะจบเรื่องราวของวันนั้น คุณเป็นคนสดใส สนุก ใช้ชีวิตเต็มที่ แต่บางครั้งกลับรู้สึกว่าเรื่องราวต่าง ๆ มันเยอะมาก ๆ สำหรับคุณจนถูกคลื่นความคิดซัดเข้ามา ความคิดมากมายที่ผ่านมาหลังจากสีส้มของพระอาทิตย์สาดลงมา ทำให้เกิดความสดใส อบอุ่นและ สร้างความรู้สึกปลอดภัยแก่ทุกคน สีที่ดูมีเรื่องราวแต่ยังคงดึงดูด จึงเป็นสีท้องฟ้าของคุณ ท้องฟ้าอยากบอกคุณว่า",
    "สีม่วงไล่เฉดลงมาชมพู คล้ายกับหนังสือนิทานที่ที่เรื่องราวใกล้จะจบลง คุณเป็นคนที่ห้อมล้อมไปด้วยความรัก มีพลังงาน และพร้อมลุยกับเรื่องใหม่ ๆ ใช้ชีวิตได้อย่างเต็มที่ แต่บางครั้งก็รู้สึกเหงาและไม่มีใครเข้าใจ ความเปล่าเปลี่ยวอาจทำให้คุณรู้สึกอ่อนล้า ท้องฟ้าจึงมีโทนที่อบอุ่นปนเข้ามาในสีที่ดูหวาน ขอให้คุณหาที่พักพิงชาร์ตพลัง และกลับมาลุยต่อนะ :) ท้องฟ้าอยากบอกคุณว่า",
    "ท้องฟ้าในใจสีนี้ คือท้องฟ้ายามค่ำคืน ที่มีแสงจากเมืองใหญ่ และดาวบนท้องฟ้ามากมาย คุณมีเรื่องที่เก็บไว้ในใจมาตลอด เรื่องราวเล็กใหญ่มากมายทำให้หัวใจของคุณคล้ายกับสีน้ำเงินยามค่ำคืน จริงๆคุณเจออะไรมาเยอะมาก ๆ แต่คุณก็ไม่อยากจะดูอ่อนแอต่อหน้าผู้อื่น เพราะคุณคือคนที่แบกรับหน้าที่อันยิ่งใหญ่ไว้ ท้องฟ้าของคุณ จึงมีความรู้สึกที่ดูลึกล้ำ แต่ยังคงสว่างสไวไปด้วยแสงที่แข็งแกร่งและเฉิดฉาย ขอให้คุณพักผ่อนจากความเหนื่อยล้า และลุกขึ้นมาเผชิญหน้ากับพระอาทิตย์ได้ในเร็ววัน ท้องฟ้าอยากบอกคุณว่า",
  ];

  const quotes = [
    "“Sunrises every morning remind us of hope and new beginnings given to us each day.”",
    "“To keep your mind safe, you need to respect your feelings.”",
    "“If you want something to change, be the change you wish to see.”",
    "“I love every imperfection of yours.”",
    "“This too shall pass—both sadness and happiness.”",
    "“Feel what you truly feel; be who you truly are.”",
    "“A little smile can change someone’s world.”",
    "“No need to be perfect, just be yourself.”",
    "“Remember, you are loved.”",
    "“Self-love is the best love.”",
    "“Remember, you are worth living.”",
    "“The sky is always with you, even when no one else is.”",
    "“The sky will always be by your side.”",
    "“The sky changes every day, and so does life.”",
    "“Nothing is permanent; accept the change.”",
    "“It’s time to let go of your worries and feel what you really feel.”",
    "“Hey, chin up! Smile on!”",
    "“You can be someone’s sunshine when the sky is gray.”",
    "“Let’s spread love and positivity.”",
    "“The sky wants to hug you from afar and say you can do it!”",
  ];

  const skyPics = [
    "/img/tree1.webp",
    "/img/tree2.webp",
    "/img/tree3.webp",
    "/img/tree4.webp",
    "/img/moon1.webp",
    "/img/moon2.webp",
    "/img/moon3.webp",
    "/img/moon4.webp",
    "/img/mountain1.webp",
    "/img/mountain2.webp",
    "/img/mountain3.webp",
    "/img/mountain4.webp",
    "/img/house1.webp",
    "/img/house2.webp",
    "/img/house3.webp",
    "/img/house4.webp",
    "/img/town1.webp",
    "/img/town2.webp",
    "/img/town3.webp",
    "/img/town4.webp",
  ];

  useEffect(() => {
    setName(localStorage.getItem("username") ?? "");
    setBurnoutScore(localStorage.getItem("burnoutScore") ?? "0");
    const parser = new UAParser(navigator.userAgent);
    setUserAgentData(parser.getDevice().model);
  }, []);

  useEffect(() => {
    const userChoice = localStorage.getItem("selectedPlace");
    if (userChoice === "ใต้ร่มไม้ ที่คุ้นเคย") {
      setIdx(burnoutQuarter);
    } else if (userChoice === "พระจันทร์และดาว ยามค่ำคืน") {
      setIdx(4 + burnoutQuarter);
    } else if (userChoice === "วิวภูเขา กว้างขวางท้าทาย") {
      setIdx(8 + burnoutQuarter);
    } else if (userChoice === "ซอยบ้านเกิด ที่แต่ก่อนเคยวิ่งเล่น") {
      setIdx(12 + burnoutQuarter);
    } else if (userChoice === "ในเมืองใหญ่ กับผู้คนที่รู้จัก") {
      setIdx(16 + burnoutQuarter);
    }
  }, [burnoutQuarter]);

  const convertImage = async (element: HTMLElement) => {
    let dataUrl = "";
    const minDataLength = 150000;
    const maxAttempts = 20;

    for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
      dataUrl = await toJpeg(element, { quality: 0.95 });
    }

    return dataUrl;
  };

  const downloadImage = async () => {
    const exportedWords = document.getElementById("exported");
    const exportedImage = document.getElementById("skyImage");
    if (!exportedWords || !exportedImage) return;

    const dataUrl = await convertImage(exportedWords);

    const link = document.createElement("a");
    link.download = "YourSkyYourMind.jpeg";
    link.href = dataUrl;
    link.click();
  };

  const shareImage = async () => {
    const exportedWords = document.getElementById("exported");
    const exportedImage = document.getElementById("skyImage");
    if (!exportedWords || !exportedImage) return;

    const dataUrl = await convertImage(exportedWords);

    const dataBlob = await (await fetch(dataUrl)).blob();
    if (!dataBlob) return;

    const image = new File([dataBlob], "YourSkyYourMind.png", {
      type: dataBlob.type,
    });
    const shareData: ShareData = {
      title: "YourSkyYourMind",
      text: "ท้องฟ้าในใจของฉัน #Yourskyyourmind",
      files: [image],
    };
    try {
      void navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className="overflow-hidden object-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div
          id="exported"
          className="absolute flex w-screen flex-col items-center overflow-hidden bg-result bg-cover bg-top bg-no-repeat"
        >
          <div className="mt-[180px] flex w-screen flex-col items-center gap-4 text-center text-black">
            <div>
              <p>
                ท้องฟ้าในใจของ <span className="font-medium">{name}</span>
              </p>
              <p>
                เป็นสี{" "}
                <span className="font-medium text-blueSkyColor">
                  “{skyColors[idx]}”
                </span>
              </p>
            </div>
            <p className="w-[85%] text-xs leading-relaxed">{desc[idx]}</p>
            <div className="relative flex h-[319px] w-[354px] items-center justify-center overflow-hidden rounded-[20px] object-cover font-caveatBrush text-white drop-shadow-sm">
              <Image
                src={skyPics[idx] ?? "/img/tree1.webp"}
                alt="YourSky"
                width={3000}
                height={2000}
                className="absolute"
                id="skyImage"
              />
              <p className="absolute left-4 top-4 z-20 w-[90%] break-all text-left drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {name}&rsquo;s Sky
              </p>
              <p className="z-20 w-[95%] text-[22px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {quotes[idx]}
              </p>
            </div>
            <a href="https://www.instagram.com/yourskyyourmind_th">
              <div className="z-20 mb-6 mr-4 mt-1 flex w-screen items-center justify-end gap-1">
                <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_0%,#DD2A7B_35%,#9537B0_62%,#515BD4_100%)]">
                  <IgLogo />
                </div>
                <div className="text-left text-[10px] leading-[12px]">
                  <p>@yourskyyourmind_th</p>
                  <p>#Yourskyyourmind</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="fixed bottom-[10%] z-20 flex w-screen justify-center gap-2">
          {userAgentData === "iPhone" ? (
            <div onClick={shareImage}>
              <ShareIcon />
            </div>
          ) : (
            <>
              <div onClick={downloadImage}>
                <DownloadIcon />
              </div>
              <div onClick={shareImage}>
                <ShareIcon />
              </div>
            </>
          )}
        </div>
        <div className="fixed bottom-[3%] z-20 flex w-screen justify-center">
          <Link href="/4-21">
            <button className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm">
              ถัดไป
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

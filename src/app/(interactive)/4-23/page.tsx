"use client";
import Link from "next/link";
import { useState } from "react";
import { DropDown } from "~/component/inputs/DropDown";
import { MovingSky } from "~/component/bg/MovingSky";
import { motion } from "framer-motion";
import { BankAccountServices } from "~/service/BankAccountServices";

export default function PaccountNo() {
  const [accountNo, setAccountNo] = useState<string>("");
  const [bank, setBank] = useState<string>("");

  const bankes = () => {
    return [
      "ธนาคารกรุงเทพ",
      "ธนาคารกสิกรไทย",
      "ธนาคารกรุงไทย",
      "ธนาคารทหารไทย",
      "ธนาคารไทยพาณิชย์",
      "ธนาคารกรุงศรีอยุธยา",
      "ธนาคารเกียรตินาคิน",
      "ธนาคารซีไอเอ็มบีไทย",
      "ธนาคารทิสโก้",
      "ธนาคารธนชาต",
      "ธนาคารยูโอบี",
      "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)",
      "ธนาคารไทยเครดิตเพื่อรายย่อย",
      "ธนาคารแลนด์ แอนด์ เฮาส์",
      "ธนาคารไอซีบีซี (ไทย)",
      "ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย",
      "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
      "ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย",
      "ธนาคารออมสิน",
      "ธนาคารอาคารสงเคราะห์",
      "ธนาคารอิสลามแห่งประเทศไทย",
      "ธนาคารแห่งประเทศจีน",
      "ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย)",
      "ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น จำกัด",
    ];
  };

  const onAccountNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNo(e.target.value);
  };

  const onBankChange = (bank: string): void => {
    setBank(bank);
  };

  const onFinishButtonClick = () => {
    void BankAccountServices.createBankAccount(accountNo, bank);
  };

  return (
    <div className="overflow-y-scroll">
      <MovingSky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col"
      >
        <div className="z-10 mt-24 flex w-screen flex-col items-center text-black">
          <p className="text-xs font-bold">
            สำหรับนิสิตนักศึกษาแพทย์และนักเรียนแพทย์ทหาร
          </p>
          <div className="mt-3 flex flex-col gap-0.5 text-left text-[9px]">
            <p>1. ไม่มีการระบุตัวตนของผู้เข้าร่วมงานวิจัย</p>
            <p>2. หากไม่มีผลเข้าร่วมจะไม่มีผลต่อการศึกษาหรือยกเว้นสิทธิใด ๆ</p>
            <p>
              3. ค่าตอบแทนจะโอนเข้าสู่บัญชีผู้ตอบแบบสอบถาม 500 คนแรกภายใน 30
            </p>
            <p>วันหลังได้รับข้อมูลโดยไม่มีการติดต่อกลับเพื่อยืนยันการโอนเงิน</p>
            <p>
              4. ข้อมูลเลขบัญชีจะถูกเก็บแยกและไม่ระบุตัวตนก้บข้อมูลวิจัยทั้งหมด
            </p>
            <p>และจะถูกทำลายหลังการโอนเงินภายใน 2 เดือน</p>
          </div>
          <div className="z-10 mt-10 flex w-full flex-col items-center text-black">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-grayBlue">
                  เลขบัญชี <span className="text-redError">*</span>
                </p>
                <input
                  placeholder="พิมพ์เพื่อตอบ"
                  id="accountNo"
                  type="text"
                  name="accountNo"
                  maxLength={25}
                  className="h-12 w-[195px] rounded-xl border-[1.5px] border-solid bg-white p-3 pt-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-textLink focus:outline-none focus:ring-0"
                  onChange={onAccountNoChange}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-grayBlue">
                  ธนาคาร <span className="text-redError">*</span>
                </p>
                <DropDown
                  choices={bankes()}
                  choiceSelection={onBankChange}
                  selectChoice={bank}
                  isLargeChoice={true}
                  isMed={false}
                />
              </div>
            </div>
          </div>
        </div>
        {accountNo && bank && (
          <Link href="/1-1">
            <div className="fixed bottom-[10%] flex w-screen justify-center">
              <button
                className="z-20 h-8 w-28 rounded-2xl bg-white text-lg text-black shadow-sm"
                onClick={onFinishButtonClick}
              >
                เสร็จสิ้น
              </button>
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
}

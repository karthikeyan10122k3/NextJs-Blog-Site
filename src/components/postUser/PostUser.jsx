

import { getSingleUser } from "@/lib/data";
import Image from "next/image";

export default async function PostUser({ userId }) {
  const user = await getSingleUser(userId);
  return (
    <div className="d-flex userInfo">
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="userimage"
        height={32}
        width={32}
        class="rounded-circle "
      />
      <p className="ms-3">{user.username}</p>
    </div>
  );
}

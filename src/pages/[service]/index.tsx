import { useRouter } from "next/router";

export default function Lookup() {
    const router = useRouter();
    const service = router.query.service;
    return (
        <>
            <h1>Does {service} have an API?</h1>
            dunno
        </>
    );
}

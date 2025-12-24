import * as Icons from "./index";

export default { title: "Guidelines/Icons" };

export const Catalog = () => {
    const entries = Object.entries(Icons);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: 16 }}>
            {entries.map(([name, Comp]) => (
                <div key={name} style={{ border: "1px solid var(--color-gray-100)", padding: 12, borderRadius: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Comp width={20} height={20} style={{ color: "var(--color-black-900)" }} />
                        <span style={{ fontSize: 12 }}>{name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

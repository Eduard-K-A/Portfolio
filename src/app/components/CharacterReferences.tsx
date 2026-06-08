const references = [
  {
    name: "Sebastian Angelo Meer",
    location: "Granja, Lipa City, Batangas, Philippines",
    occupation: "College Student",
    phone: "+63 917 134 9751",
  },
  {
    name: "Ivan Joseph Jaurige",
    location: "Santiago, Malvar, Batangas, Philippines",
    occupation: "College Student",
    phone: "+63 976 496 2680",
  },
  {
    name: "Keith Justin Nario",
    location: "Tangway, Lipa City, Batangas, Philippines",
    occupation: "College Student",
    phone: "+63 956 632 2071",
  },
];

export function CharacterReferences() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {references.map((reference, index) => (
        <div
          key={`${reference.name}-${index}`}
          className="group rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-4 transition-all duration-200 hover:border-[var(--fg)] hover:-translate-y-0.5"
        >
          <h3 className="mb-3" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
            {reference.name}
          </h3>
          <dl className="grid gap-2" style={{ fontSize: "0.8125rem" }}>
            <div>
              <dt className="font-mono uppercase text-[var(--muted)]" style={{ fontSize: "0.625rem" }}>
                Location
              </dt>
              <dd>{reference.location}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase text-[var(--muted)]" style={{ fontSize: "0.625rem" }}>
                Occupation
              </dt>
              <dd>{reference.occupation}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase text-[var(--muted)]" style={{ fontSize: "0.625rem" }}>
                Phone
              </dt>
              <dd>{reference.phone}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

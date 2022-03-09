function ResourceItem({ name, length }) {
  return `
    <tr>
    <td><a href="api/${name}">/${name}</a></td>
    <td>${length ? `${length} ${name}` : 'object'}</td>
    </tr>
  `;
}

function ResourceList({ db }) {
  return `
    <table>
    <thead>
    <tr>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <tbody>
          ${Object.keys(db)
            .map((name) =>
              ResourceItem({
                name,
                length: Array.isArray(db[name]) && db[name].length,
              }),
            )
            .join('')}
    </tbody>
    </table>
  `;
}

function NoResources() {
  return `<p>No resources found</p>`;
}

function ResourcesBlock({ db }) {
  return `
    <div>
      <h1>Resources</h1>
      ${Object.keys(db).length ? ResourceList({ db }) : NoResources()}
    </div>
  `;
}

window
  .fetch('api/db')
  .then((response) => response.json())
  .then((db) => (document.getElementById('resources').innerHTML = ResourcesBlock({ db })));

function CustomRoutesBlock({ customRoutes }) {
  const rules = Object.keys(customRoutes);
  if (rules.length) {
    return `
      <div>
        <h1>Custom Routes</h1>
        <table>
          ${rules
            .map(
              (rule) =>
                `<tr>
              <td>${rule}</td>
              <td><code>⇢</code> ${customRoutes[rule]}</td>
            </tr>`,
            )
            .join('')}
        </table>
      </div>
    `;
  }
}

//Custom Routes
// window
//   .fetch('api/__rules')
//   .then((response) => response.json())
//   .then(
//     (customRoutes) =>
//       (document.getElementById('custom-routes').innerHTML = CustomRoutesBlock({
//         customRoutes,
//       })),
//   );

import handlebars from 'handlebars';
import { kebabCase } from 'lodash';
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import postTemplate from './_post.md?raw';

const categories = ['Featured', 'Developer', 'SGID Blog', 'GPS-surveyor', 'Guestblog'];
const requiredFields = ['title', 'type', 'displayName', 'email'];
function App() {
  const [state, setState] = useLocalStorage('templater-state', {
    title: '',
    type: 'post',
    categories: [],
    tags: '',
    displayName: '',
    email: '',
  });
  const [output, setOutput] = useState({ fileName: '', yaml: '' });

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const updateCategories = (category, checked) => {
    setState((prevState) => {
      const categories = checked
        ? [...prevState.categories, category]
        : prevState.categories.filter((c) => c !== category);
      return {
        ...prevState,
        categories,
      };
    });
  };

  const validate = () => {
    return requiredFields.every((field) => state[field].trim().length > 0);
  };

  const generate = () => {
    const template = handlebars.compile(postTemplate);

    setOutput({ yaml: template(state), fileName: getFileNameString(new Date(), state.title, state.type) });
  };

  const getFileNameString = (date, title, type) => {
    // summary:
    //      formats file name from date and title
    // date: Date
    // title: string
    // type: string (page || post)

    if (type === 'post') {
      const dateString = date.toISOString().split('T')[0];
      return '_posts/' + dateString + '-' + kebabCase(title) + '.md';
    } else {
      return kebabCase(title) + '/index.md';
    }
  };

  return (
    <div className="grid gap-6 grid-cols-3 p-6 text-gray-700">
      <div className="col-span-3">
        <h1 className="text-4xl">
          Generate New Post
          <a className="text-xs ml-1 text-indigo-400" href="https://github.com/agrc/templater/releases">
            {window.APP_VERSION}
          </a>
        </h1>
        <h6 className="text-sm text-gray-500">*Required</h6>
      </div>
      <div className="col-span-1">
        <label>
          <span>*Title</span>
          <input
            type="text"
            className="form-element"
            value={state.title}
            onChange={(event) => updateState('title', event.target.value)}
          />
        </label>
        <label>
          <span>*Type</span>
          <select
            className="form-select form-element"
            value={state.type}
            onChange={(event) => updateState('type', event.target.value)}
          >
            <option value="post">Post</option>
            <option value="page">Page</option>
          </select>
        </label>
        <label>
          <span>Categories</span>
        </label>
        {categories.map((category) => (
          <label className="flex items-center" key={category}>
            <input
              type="checkbox"
              checked={state.categories.indexOf(category) > -1}
              onChange={(event) => updateCategories(category, event.target.checked)}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
        <label>
          <span>Tags (comma-separated)</span>
          <input
            type="text"
            className="form-element"
            value={state.tags}
            onChange={(event) => updateState('tags', event.target.value)}
          />
        </label>
        <div className="border-gray-300 rounded-md border mt-3">
          <div className="bg-slate-200 rounded-t-md p-3 border-b border-gray-300">Author</div>
          <div className="p-3">
            <label className="mt-0">
              <span>*Display Name</span>
              <input
                type="text"
                className="form-element"
                value={state.displayName}
                onChange={(event) => updateState('displayName', event.target.value)}
              />
            </label>
            <label>
              <span>*Email</span>
              <input
                type="email"
                className="form-element"
                value={state.email}
                onChange={(event) => updateState('email', event.target.value)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <label>
          <span>File Path</span>
          <input type="text" className="form-element" value={output.fileName} disabled />
        </label>
        <label>
          <span>Contents</span>
          <textarea id="" rows="20" className="form-element" value={output.yaml} disabled></textarea>
        </label>
      </div>

      <button
        className="col-span-3 w-full bg-green-200 p-4 rounded-md border border-green-600 disabled:bg-slate-200 disabled:border-slate-300 disabled:text-gray-400"
        disabled={!validate()}
        onClick={generate}
      >
        Generate
      </button>

      {import.meta.env.DEV ? <pre className="col-span-3">{JSON.stringify(state, null, 2)}</pre> : null}
    </div>
  );
}

export default App;

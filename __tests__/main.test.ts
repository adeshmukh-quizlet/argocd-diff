import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['ARCH'] = 'darwin';
  process.env['GITHUB_REPOSITORY'] = 'quizlet/cd-infra';
  process.env['INPUT_github-token'] = '500';
  process.env['INPUT_argocd-version'] = 'v1.6.1';
  process.env['INPUT_argocd-server-url'] = 'argocd.example.com';
  process.env['INPUT_argocd-token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNWMzYmUxNy02YWFkLTQ4MjUtOThhYy02M2Y0MDg3ZmUzY2QiLCJpYXQiOjE1OTQzMDAxODIsImlzcyI6ImFyZ29jZCIsIm5iZiI6MTU5NDMwMDE4Miwic3ViIjoiYXJnb2NkLXByLWJvdCJ9.S4IfCuLjLgIf7XFePTUYmvekA22V9FXcE_xXn0Dn7Z8';
  const ip = path.join(__dirname, '..', 'lib', 'main.js');
  const options: cp.ExecSyncOptions = {
    env: process.env
  };
  console.log(cp.execSync(`node ${ip}`, options).toString());
});

afterAll(() => {
  cp.execSync('rm -rf bin');
});
